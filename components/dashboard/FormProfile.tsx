import React, { ReactElement, useState, useRef } from "react";
import FileBase from "react-file-base64";
import {
  FormControl,
  Image,
  Textarea,
  Stack,
  VStack,
  Input,
  Box,
} from "@chakra-ui/react";
import { useSession } from "next-auth/client";

interface Props {
  data?: any;
}
interface User {
  image?: string | null | File;
  username?: string | null | File;
  description?: string | null | File;
  email?: string | null | File;
  genre?: string | null | File;
  country?: string | null | File;
  social: {
    twitter?: string | null | File;
    linkedin?: string | null | File;
    facebook?: string | null | File;
    github?: string | null | File;
  };
  bird?: string | null | File;
  password?: string | null | File;
  repeatedPassword?: string | null | File;
}

export default function FormProfile({ data }: Props): ReactElement {
  const [session, loading] = useSession();

  const form = useRef(null);
  const [user, setUser] = useState<User>({
    image: `${data.data ? data.data.image : ""}`,
    username: `${data.data ? data.data.username : ""}`,
    description: `${data.data ? data.data.description : ""}`,
    email: `${data.data ? data.data.email : ""}`,
    genre: `${data.data ? data.data.genre : ""}`,
    country: `${data.data ? data.data.country : ""}`,
    social: {
      twitter: `${data.data ? data.data.social.twitter : ""}`,
      linkedin: `${data.data ? data.data.social.linkedin : ""}`,
      facebook: `${data.data ? data.data.social.facebook : ""}`,
      github: `${data.data ? data.data.social.github : ""}`,
    },
    bird: `${data.data ? data.data.bird : ""}`,
    password: `Contraseña`,
    repeatedPassword: `Nueva contraseña`,
  });

  const handleSubmit = () => {
    if (form && form.current) {
      const formData = new FormData(form.current);
      const person: User = {
        image: user.image,
        username: formData.get("name"),
        description: formData.get("description"),
        email: formData.get("email"),
        genre: formData.get("gender"),
        country: formData.get("country"),
        social: {
          twitter: formData.get("twitter"),
          linkedin: formData.get("linkedin"),
          facebook: formData.get("facebook"),
          github: formData.get("github"),
        },
        bird: formData.get("birth"),
        password: formData.get("password"),
        repeatedPassword: formData.get("repeatedPassword"),
      };
      const putData = async (person) => {
        if (loading) {
          return false;
        } else {
          const response = await fetch(
            `api/users/update/${session?.user.email}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(person),
            }
          );
          const data = await response.json();
          return data;
        }
      };
      putData(person);
    }
  };
  return (
    <form ref={form}>
      <FormControl
        ref={form}
        d="flex"
        w="100%"
        flexDirection="column"
        my={{ sm: "2rem", lg: "2rem" }}
        p={{ sm: "1rem" }}
        borderRadius="1em"
        maxW={{ sm: "100vw" }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction={{ sm: "column", md: "row", lg: "row" }}
          w={{ sm: "100%", lg: "80%" }}
          alignItems="center"
          justifyContent="space-evenly"
          bg="#ffff"
          px={{ sm: "1rem" }}
          py={{ sm: "1rem" }}
          mb="1rem"
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          borderRadius="7px"
        >
          <VStack
            spacing={{ sm: "1.5rem", md: "1.5rem" }}
            mb={{ sm: "1.5rem", md: "0" }}
            w={{ sm: "100%" }}
          >
            <Image
              src={user.image?.toString()}
              alt={user.username?.toString()}
              boxSize="150px"
              borderRadius="50%"
              filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Box
              w={{ sm: "100%" }}
              borderRadius="5px"
              overflow="hidden"
              fontSize={{ sm: "10px" }}
            >
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }: { base64: string }) =>
                  setUser({ ...user, image: base64 })
                }
              />
            </Box>

            <Input name="name" placeholder={user.username} required />
            <Textarea
              name="description"
              bg="#E9EFF6"
              placeholder={user.description}
              required
            />
          </VStack>
          <VStack
            spacing="1.5rem"
            mb={{ sm: "1.5rem", md: "0" }}
            w={{ sm: "100%" }}
          >
            <Input name="email" placeholder={user.email} required />
            <Input name="gender" placeholder={user.genre} required />
            <Input name="country" placeholder={user.country} required />
            <Input name="twitter" placeholder={user.social.twitter} required />
            <Input
              name="linkedin"
              placeholder={user.social.linkedin}
              required
            />
          </VStack>
          <VStack spacing="1.5rem" w={{ sm: "100%" }}>
            <Input name="birth" placeholder={user.bird} required />
            <Input name="password" placeholder={user.password} required />
            <Input
              name="repeatedPassword"
              placeholder={user.repeatedPassword}
              required
            />
            <Input
              name="facebook"
              placeholder={user.social.facebook}
              required
            />
            <Input name="github" placeholder={user.social.github} required />
          </VStack>
        </Stack>
        <Box
          as="button"
          onClick={handleSubmit}
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          backgroundColor="#A486AE"
          borderRadius={{ sm: "5px", lg: "7px" }}
          padding=".2rem "
          color="white"
          width={{ sm: "100%", md: "80%" }}
          fontSize="1.5rem"
          height="48px"
          _hover={{ bg: "#78428a" }}
          _active={{
            bg: "#5c2e6b",
            transform: "scale(0.98)",
            border: "1px",
            borderColor: "#bec3c9",
            borderRadius: "15px",
          }}
          _focus={{
            outline: "none",
          }}
        >
          Enviar
        </Box>
      </FormControl>
    </form>
  );
}
