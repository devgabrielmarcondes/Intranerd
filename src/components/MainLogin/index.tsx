import React, { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { useHistory } from "react-router-dom";

import LBtn from "../LoginBtn";

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
  const [error, setError] = useState<string>("");

  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleLogin() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/config");
  }

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

          <form>
            <InputWrapper>
              <p>Nome</p>
              <input type="text" />

              <p>Email</p>
              <input type="text" />
            </InputWrapper>
          </form>

          <LBtn className="loginBtn" type="submit">
            Entrar
            <LoginIcon />
          </LBtn>
        </FormInfo>
      </FormArea>
    </Container>
  );
};

export default MainLogin;
