import React, { useState } from "react";

import Btn from "../RegisterBtn";

import { useHistory } from "react-router-dom";

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
  InputFlex,
} from "./styles";

const MainRegister: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");

  const history = useHistory();

  function navigateToLogin() {
    history.push("/login");
  }

  return (
    <Container>
      <Titles>
        <h1>Cadastro</h1>
        <h2>Inscreva-se para avaliar seu produtos prediletos</h2>
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
          <GoogleBtn onClick={navigateToLogin}>
            Crie sua conta com o Google
            <GoogleIcon />
          </GoogleBtn>

          <Separator>
            <p>ou crie sua conta intranerd</p>
          </Separator>

          <form>
            <InputWrapper>
              <InputFlex>
                <p>Nome</p>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  autoComplete="none"
                />
              </InputFlex>

              <InputFlex>
                <p>Email</p>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  autoComplete="none"
                />
              </InputFlex>
            </InputWrapper>

            <InputWrapper>
              <InputFlex>
                <p>Senha</p>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  autoComplete="none"
                />
              </InputFlex>

              <InputFlex>
                <p>CPF</p>
                <input
                  type="password"
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpf}
                  autoComplete="none"
                />
              </InputFlex>
            </InputWrapper>
          </form>

          <Btn className="registerBtn" type="submit">
            Cadastrar-se
            <LoginIcon />
          </Btn>
        </FormInfo>
      </FormArea>
    </Container>
  );
};

export default MainRegister;
