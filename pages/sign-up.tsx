import React, { useEffect } from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

import useAuth from "../hooks/useAuth";
import Layout from "../components/Layout";
import Form from "../components/signup/Form";
import Options from "../components/signup/Otions";

export default function SignUp(): JSX.Element {
<<<<<<< HEAD
  const { loading, session, router } = useAuth();
=======
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    !loading && session && router.push("/");
  }, []);
  const {
    inputType: inputTypePassword,
    Icon: IconPassword,
  } = usePasswordToggle();
  const {
    inputType: inputTypeConfirmPassword,
    Icon: IconConfirmPassword,
  } = usePasswordToggle();

  const [apiError, setApiError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const register = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (data.code === 201) {
        signIn("credentials", {
          callbackUrl: window.location.origin,
          email: values.email,
          password: values.password,
        });
        setRegisterSuccess(true);
        setApiError(null);
        return;
      }
>>>>>>> 20bb3c8 (refactor: headerlogin conflict solved)

  useEffect(() => {
    !loading && session && router.push("/");
  }, []);

  const color = "#5555555";
  const bg = `linear-gradient(90deg,
    rgba(82, 30, 135, 0.8) 0.01%,
    rgba(91, 29, 136, 0.8) 14.55%,
    rgba(117, 26, 138, 0.8) 38.82%,
    rgba(138, 23, 140, 0.8) 54.92%,
    rgba(142, 28, 134, 0.8) 56.27%,
    rgba(195, 109, 66, 0.8) 77.54%,
    rgba(228, 160, 23, 0.8) 92.6%,
    rgba(241, 178, 6, 0.8) 99.98%)`;
  const hover = {
    background:
      "linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8)14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)",
    color: "#fafafa",
  };
  const boxStyle = {
    Position: "absolute",
    top: "50%",
    zIndex: 1,
    borderTopWidth: "2px",
    borderColor: "#E1E2E7",
    width: "100%",
  };
  const bgText = "#F3F2F3";
  const colorText = "#85898D";

  return (
    <Layout title="Registro">
      <Box display="flex" maxH="100%" p={{ sm: "1rem", lg: "2rem" }}>
        <Box
          display="flex"
          flexDirection="column"
          w={{ sm: "100%", md: "55%", lg: "55%" }}
          // pt={{ sm: "6rem", lg: "6rem" }}
          px={{ sm: "1rem" }}
          textAlign="center"
          alignItems="center"
        >
          <Heading
            color="text.500"
            as="h2"
            fontSize={{ sm: "26px", lg: "2.5rem" }}
          >
            Bienvenido a bordo
<<<<<<< HEAD
          </Heading>

          <Form />
          <Options />
        </Box>
        <Box
          display={{ sm: "none", md: "flex", lg: "flex" }}
          w={{ md: "45%", lg: "45%" }}
          h="100%"
          alignItems="center"
        >
          <Image
            src="/images/registro.png"
            alt="Sign up"
            transform="scaleX(-1)"
          />
        </Box>
=======
          </Text>
          <FormControl width="100%" marginTop="2rem">
            <form onSubmit={handleSubmit}>
              <InputGroup
                width="80%"
                margin="0 auto"
                display="flex"
                flexDirection="row"
              >
                <Box
                  // display="flex"
                  margin="0.5rem 1rem"
                  width="100%"
                  position="relative"
                >
                  <Input
                    variant="filled"
                    type="text"
                    id="username"
                    placeholder="Nombre de usuario"
                    name="username"
                    width="100%"
                    padding="1rem"
                    borderRadius="10px"
                    height="5rem"
                    value={username}
                    onChange={handleChange}
                  />
                  {(errors as SignupErrors).username && (
                    <Text color="red">{(errors as SignupErrors).username}</Text>
                  )}
                </Box>
                <Box margin="0.5rem 1rem" width="100%" position="relative">
                  <Input
                    variant="filled"
                    type="text"
                    id="email"
                    placeholder="Correo eletronico"
                    name="email"
                    width="100%"
                    padding="1rem"
                    borderRadius="10px"
                    height="5rem"
                    value={email}
                    onChange={handleChange}
                  />
                  {(errors as SignupErrors).email && (
                    <Text color="red">{(errors as SignupErrors).email}</Text>
                  )}
                </Box>
              </InputGroup>

              <InputGroup
                width="80%"
                margin="0 auto"
                display="flex"
                flexDirection="row"
              >
                <Box margin="1rem 1rem" width="100%" position="relative">
                  <Input
                    variant="filled"
                    type={inputTypePassword}
                    id="password"
                    placeholder="Contraseña"
                    name="password"
                    width="100%"
                    padding="1rem"
                    borderRadius="10px"
                    height="5rem"
                    value={password}
                    onChange={handleChange}
                  />
                  <InputRightElement
                    width="1.5rem"
                    position="absolute"
                    top="1.2rem"
                    left="calc(90% - 6px)"
                    cursor="pointer"
                    children={IconPassword}
                  />
                  {(errors as SignupErrors).password && (
                    <Text color="red">{(errors as SignupErrors).password}</Text>
                  )}
                </Box>
                <Box margin="1rem 1rem" width="100%" position="relative">
                  <Input
                    variant="filled"
                    type={inputTypeConfirmPassword}
                    id="confirmPassword"
                    placeholder="Confirmar contraseña"
                    name="confirmPassword"
                    width="100%"
                    padding="1rem"
                    borderRadius="10px"
                    height="5rem"
                    values={confirmPassword}
                    onChange={handleChange}
                  />
                  <InputRightElement
                    width="1.5rem"
                    position="absolute"
                    top="1.2rem"
                    left="calc(90% - 6px)"
                    cursor="pointer"
                    children={IconConfirmPassword}
                  />
                  {(errors as SignupErrors).confirmPassword && (
                    <Text color="red">
                      {(errors as SignupErrors).confirmPassword}
                    </Text>
                  )}
                </Box>
              </InputGroup>
              {apiError && <Text color="red">{apiError}</Text>}
              {registerSuccess && (
                <Text color="green">Register successful!</Text>
              )}
              <Box textAlign="center" marginTop="1.5rem">
                <Button
                  type="submit"
                  background={bg}
                  _hover={hover}
                  width="50%"
                  height="5rem"
                  padding="1rem 0"
                  borderRadius="10px"
                  color="white"
                  fontSize="30px"
                >
                  Registrarse
                </Button>
              </Box>
            </form>
          </FormControl>
          <Box width="50%">
            <Box position="relative" mt="2em" height="2rem">
              <hr style={boxStyle} />
              <Text
                fontSize="16px"
                position="absolute"
                top="calc(50% - 28px)"
                padding="1rem"
                right="calc(50% - 73px)"
                zIndex="2"
                backgroundColor={bgText}
                color={colorText}
              >
                O continua
              </Text>
            </Box>
            <Box display="flex" justifyContent="space-around" mt="2rem">
              <Box
                width="100px"
                height="80px"
                backgroundColor="white"
                borderRadius="1.5em"
                padding="1.5em"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <GrGoogle size="medium" />
              </Box>
              <Text>con</Text>
              <Box
                width="100px"
                height="80px"
                padding="1.5em"
                backgroundColor="white"
                borderRadius="1.5em"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <GrFacebook size="small" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box height="100vh" width="45%" marginTop="5rem">
          <Image
            src="/images/registro.png"
            alt="Sign up"
            width={"90%"}
            transform="scaleX(-1)"
          />
        </Box>
>>>>>>> 20bb3c8 (refactor: headerlogin conflict solved)
      </Box>
    </Layout>
  );
}
