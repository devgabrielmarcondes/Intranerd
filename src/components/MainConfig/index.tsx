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
  const { user } = useAuth();

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
              <span>Nome:</span> {user?.name}
            </p>
            {/* <p>Email: {user?.email}</p> */}
          </Information>
        </InfoContainer>
      </UserInfo>
    </Container>
  );
};

export default MainConfig;
