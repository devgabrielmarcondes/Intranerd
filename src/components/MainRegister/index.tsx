import React from "react";

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
          <GoogleBtn onClick={navigateToLogin} >
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
                <input type="text" />
              </InputFlex>

              <InputFlex>
                <p>Email</p>
                <input type="text" />
              </InputFlex>
            </InputWrapper>

            <InputWrapper>
              <InputFlex>
                <p>Senha</p>
                <input type="text" />
              </InputFlex>

              <InputFlex>
                <p>CPF</p>
                <input type="text" />
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
