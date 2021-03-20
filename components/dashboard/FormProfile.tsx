import React, {
  ReactElement,
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
} from "react";
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
import TheInput from "../share/TheInput";
import ButtonAction from "../landing/ButtonAction";

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
}

export default function FormProfile({ data }: Props): ReactElement {
  const [session, loading] = useSession();
  useEffect(() => {
    console.log(data);
  }, []);

  const form = useRef(null);
  const [user, setUser] = useState<User>({
    avatar: "",
    name: `${data.data ? data.data.username : "owo"}`,
    description: "Una descripcion vacan...",
    email: "nick@comfeco.com",
    gender: "other",
    country: "Colombia",
    twitter: "@nicktwitter",
    linkedin: "@nicklinkedin",
    birth: "6.09.210",
    password: "holaholahola",
    repeatedPassword: "holaholahola",
    facebook: "nickfacebook",
    github: "nickgithub",
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
      };
      // Hacer PUT en la base de datos de todo el usuario
      alert(JSON.stringify(person));
    }
  };
  return (
    <form ref={form}>
      <Box onClick={() => getData()}>owowowo</Box>
      <FormControl
        d="flex"
        flexDirection="column"
        my={{ sm: "2rem", lg: "2rem" }}
        mx={{ lg: "5rem" }}
        p={{ sm: "1rem" }}
        borderRadius="1em"
        maxW={{ sm: "100vw" }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction={{ sm: "column", md: "row", lg: "row" }}
          w={{ lg: "80%" }}
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
          >
            {/* Traer la imagen de la base de datos */}
            <Image src="/images/avatar.png" boxSize="150px" />
            <FileBase
              borderRadius="5px"
              type="file"
              multiple={false}
              onDone={({ base64 }: { base64: string }) =>
                setUser({ ...user, avatar: base64 })
              }
            />

            <Input name="name" placeholder={user.name} />
            <Textarea
              name="description"
              bg="#E9EFF6"
              placeholder={user.description}
            />
          </VStack>
          <VStack spacing="1.5rem" mb={{ sm: "1.5rem", md: "0" }}>
            <Input name="email" placeholder={user.email} />
            <Input name="gender" placeholder={user.gender} />
            <Input name="country" placeholder={user.country} />
            <Input name="twitter" placeholder={user.twitter} />
            <Input name="linkedin" placeholder={user.linkedin} />
          </VStack>
          <VStack spacing="1.5rem">
            <Input name="birth" placeholder={user.birth} />
            <Input name="password" placeholder={user.password} />
            <Input
              name="repeatedPassword"
              placeholder={user.repeatedPassword}
            />
            <Input name="facebook" placeholder={user.facebook} />
            <Input name="github" placeholder={user.github} />
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
          width="100%"
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
