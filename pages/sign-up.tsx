import React, { ReactElement } from "react";
import Image from 'next/image';
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import {Box, Input, Text} from 
import usePasswordToggle from "../hooks/usePasswordToggle";

interface Props {}

const SignUpStyle = styled.div`
  display: flex;

  h1 {
    font-size: 2rem;
  }

  form {
    width: 100%;
    margin-top: 2rem; 
  }
`

const SingUpFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: center;
`

const FieldGroup = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`

const Field = styled.div`
  display: flex;
  margin: 0.5rem 1rem;
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
  }

  span {
    position: absolute;
    top: 35%;
    left: 90%;
    cursor: pointer;
  }
`

const ImageStyles = styled.div`
  width: 30%;
  margin-top: 5rem;
  img {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`

const InputSubmit = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  input {
    background: linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8) 
    14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%);
    width: 60%;
    color: white;
    padding: 1rem 0;
    border-radius: 10px;
  }
`

export default function SignUp({}: Props): ReactElement {
  const {inputType: inputTypePassword, Icon: IconPassword} = usePasswordToggle();
  const {inputType: inputTypeConfirmPassword, Icon: IconConfirmPassword} = usePasswordToggle();
  
  return <Layout title="Registro">

    <SignUpStyle
    style={{
      display:'flex'
    }}>
      <SingUpFormStyle style={{
      display:'flex',
      flexDirection:"column",
      width: "55%",
      textAlign:"center"
      }}>
        <h1 style={{
          fontSize:'2rem'
        }}>
          Bienvenido a bordo
        </h1>
        <form style={{
          width:"100%",
          marginTop:"2rem"
        }}>
          <FieldGroup style={{
            width:'80%',
            margin: "0 auto",
            display:'flex',
            flexDirection: "row"
          }}>
            <Field style={{
              display:'flex',
              margin: "0.5rem 1rem",
              width: "100%",
              position: "relative"
            }}>
              <input 
                type="text"
                id="username"
                placeholder="Nombre de usuario"
                name="username"
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "10px"
                }}
              />
            </Field>
            <Field>
              <input 
                  type="text"
                  id="email"
                  placeholder="Correo eletronico"
                  name="email"
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "10px"
                  }}
                />
            </Field>
          </FieldGroup>
          
          <FieldGroup>
            <Field>
              <input 
                  type={inputTypePassword}
                  id="password"
                  placeholder="Contrase;a"
                  name="password"
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "10px"
                  }}
                />
                <span style={{
                  position: "absolute",
                  top: "35%",
                  left: "90%",
                  cursor: "pointer",
                }}>{IconPassword}</span>
            </Field>
            <Field>
              <input 
                  type={inputTypeConfirmPassword}
                  id="confirm-password"
                  placeholder="Confirmar contrase;a"
                  name="confirm-password"
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "10px"
                  }}
                />
                <span style={{
                  position: "absolute",
                  top: "35%",
                  left: "90%",
                  cursor: "pointer",
                }}>
                  {IconConfirmPassword}
                </span>
            </Field>
          </FieldGroup>

          <InputSubmit style={{
            textAlign: "center",
            marginTop: "1.5rem",
          }}>
            <input 
              type="submit"
              value="Registrarse"
              style={{
                background: `linear-gradient(90deg,
                rgba(82, 30, 135, 0.8) 0.01%,
                rgba(91, 29, 136, 0.8) 14.55%,
                rgba(117, 26, 138, 0.8) 38.82%,
                rgba(138, 23, 140, 0.8) 54.92%,
                rgba(142, 28, 134, 0.8) 56.27%,
                rgba(195, 109, 66, 0.8) 77.54%,
                rgba(228, 160, 23, 0.8) 92.6%,
                rgba(241, 178, 6, 0.8) 99.98%)`,
                width: "60%",
                padding: "1rem 0",
                borderRadius: "10px",
                color:"white"
              }}
            />
          </InputSubmit>
        </form>

        <div>
          O continua
        </div>
      </SingUpFormStyle>
      <ImageStyles style={{
        width: "45%",
        marginTop: "5rem",
      }}>
        <Image 
          src="/images/registro.png"
          alt="Sign up"
          width={600}
          height={450}
          
        />
      </ImageStyles>
    </SignUpStyle>
    
  </Layout>;
}
