import React from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  UserInfo,
  InfoTab,
  Tab,
  InfoContainer,
  Information,
} from "./styles";

const MainConfig: React.FC = () => {
  const { user, currentUser } = useAuth();

  return (
    <Container>
      <h1>Meus Dados</h1>
      <UserInfo>
        <InfoTab>
          <Tab>
            <Link to="/config">
              <p>Informações da conta</p>
            </Link>
          </Tab>
          <Tab>
            <Link to="/config/seguranca">
              <p>Segurança</p>
            </Link>
          </Tab>
          <Tab>
            <Link to="/config/privacidade">
              <p>Privacidade</p>
            </Link>
          </Tab>
        </InfoTab>

        <InfoContainer>
          <h1>Informações da conta</h1>
          <Information>
            <p>
              <span>{currentUser ? <span>Email</span> : <span>Nome</span> }: {user?.name} {JSON.stringify(currentUser, ["email"])}</span> 
            </p>
            <p>
              <span>{user ? <span>Email:</span> : "" } {user?.uemail}</span>
            </p>
            <p>
              <span>{user ? <span>Telefone:</span> : "" } {user?.uphoneNumber}</span>
            </p>
          </Information>
        </InfoContainer>
      </UserInfo>
    </Container>
  );
};

export default MainConfig;
