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

interface Props {
  data?: any;
}
interface User {
  avatar?: string | null | File;
  name?: string | null | File;
  description?: string | null | File;
  email?: string | null | File;
  gender?: string | null | File;
  country?: string | null | File;
  twitter?: string | null | File;
  linkedin?: string | null | File;
  birth?: string | null | File;
  password?: string | null | File;
  repeatedPassword?: string | null | File;
  facebook?: string | null | File;
  github?: string | null | File;
  badges?: {
    id: string;
    ico: sting;
  };
}

export default function FormProfile({ data }: Props): ReactElement {
  const form = useRef(null);
  const [user, setUser] = useState<User>({
    avatar: `${data.data ? data.data.image : ""}`,
    name: `${data.data ? data.data.username : ""}`,
    description: `${data.data ? data.data.description : ""}`,
    email: `${data.data ? data.data.email : ""}`,
    gender: `${data.data ? data.data.genre : ""}`,
    country: `${data.data ? data.data.country : ""}`,
    twitter: `${data.data ? data.data.social.twitter : ""}`,
    linkedin: `${data.data ? data.data.social.linkedin : ""}`,
    birth: `${data.data ? data.data.bird : ""}`,
    password: `Contraseña`,
    repeatedPassword: `Nueva contraseña`,
    facebook: `${data.data ? data.data.social.facebook : ""}`,
    github: `${data.data ? data.data.social.github : ""}`,
  });

  const handleSubmit = () => {
    if (form && form.current) {
      const formData = new FormData(form.current);
      const person: User = {
        avatar: user.avatar,
        name: formData.get("name"),
        description: formData.get("description"),
        email: formData.get("email"),
        gender: formData.get("gender"),
        country: formData.get("country"),
        twitter: formData.get("twitter"),
        linkedin: formData.get("linkedin"),
        birth: formData.get("birth"),
        password: formData.get("password"),
        repeatedPassword: formData.get("repeatedPassword"),
        facebook: formData.get("facebook"),
        github: formData.get("github"),
        badges: {
          id: "6055cbfcbe3ac41f1c796cbd",
          ico: "fullData",
        },
      };
      const putData = async (person) => {
        if (loading) {
          return false;
        } else {
          const response = await fetch(`/api/users/${session?.user.email}`);
          const data = await response.json();
          return data;
        }
      };
      return putData(person);
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
              src={user.avatar?.toString()}
              alt={user.name?.toString()}
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
                  setUser({ ...user, avatar: base64 })
                }
              />
            </Box>

            <Input name="name" placeholder={user.name} required />
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
            <Input name="gender" placeholder={user.gender} required />
            <Input name="country" placeholder={user.country} required />
            <Input name="twitter" placeholder={user.twitter} required />
            <Input name="linkedin" placeholder={user.linkedin} required />
          </VStack>
          <VStack spacing="1.5rem" w={{ sm: "100%" }}>
            <Input name="birth" placeholder={user.birth} required />
            <Input name="password" placeholder={user.password} required />
            <Input
              name="repeatedPassword"
              placeholder={user.repeatedPassword}
              required
            />
            <Input name="facebook" placeholder={user.facebook} required />
            <Input name="github" placeholder={user.github} required />
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
