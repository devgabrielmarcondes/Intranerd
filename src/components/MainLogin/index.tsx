import React, { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { useHistory } from "react-router-dom";

import { useToast, Button } from "@chakra-ui/react";

import {
  Container,
  Titles,
  FormArea,
  ContactInfo,
  FormInfo,
  Icons,
  IconWrapper,
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  GoogleIcon,
  Separator,
  LoginIcon,
  InputWrapper,
  GoogleBtn,
} from "./styles";

const MainLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleLogin() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/config");
  }

  const { login } = useAuth();
  const toast = useToast();

  return (
    <Container>
      <Titles>
        <h1>Login</h1>
        <h2>Entre para avaliar seu produtos prediletos</h2>
      </Titles>

      <FormArea>
        <ContactInfo>
          <h1>Informações do contato</h1>
          <h3>Fique atento ao horário de atendimento</h3>

          <Icons>
            <IconWrapper>
              <PhoneIcon />
              <p>(86) 30404-8549</p>
            </IconWrapper>

            <IconWrapper>
              <EmailIcon />
              <p>email@email.com</p>
            </IconWrapper>

            <IconWrapper>
              <LocationIcon />
              <p>Bela Vista 6642, São Franciso</p>
            </IconWrapper>
          </Icons>
        </ContactInfo>

        <FormInfo>
          <GoogleBtn onClick={handleLogin}>
            Entre utilizando sua conta Google
            <GoogleIcon />
          </GoogleBtn>

          <Separator>
            <p>ou entre em sua conta intranerd</p>
          </Separator>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email || !password) {
                toast({
                  description: "Credenciais não validas",
                  status: "error",
                  duration: 3000,
                  isClosable: true
                });
              }
              setIsSubmitting(true);
              login(email, password)
                .then(() => {
                  history.push("/config");
                })
                .catch((error) => {
                  toast({
                    description: error.message,
                    status: "error",
                    duration: 4000,
                    isClosable: false,
                  });
                })
                .finally(() => setIsSubmitting(false));
            }}
          >
            <InputWrapper>
              <p>Email</p>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="email"
              />

              <p>Senha</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                autoComplete="password"
              />
            </InputWrapper>

            <Button
              isLoading={isSubmitting}
              type="submit"
              transform="filter 0.2s"
              _hover={{ filter: "brightness(0.9)" }}
              fontFamily="Mukta"
              fontWeight="700"
              fontSize="16px"
              color="#F5F0F0"
              h="44px"
              bg="#08A609"
              w="100%"
              p="2.5"
            >
              Entrar
              <LoginIcon />
            </Button>
          </form>
        </FormInfo>
      </FormArea>
    </Container>
  );
};

export default MainLogin;
