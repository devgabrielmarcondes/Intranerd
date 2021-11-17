import React, { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/images/Logo.svg";

import { useToast } from "@chakra-ui/toast";

import {
  Container,
  NavLeft,
  LogoImg,
  Links,
  BarsIcon,
  NavRight,
  InputWrapper,
  Input,
  SearchIcon,
  ButtonWrapper,
  BagIcon,
  UserIcon,
} from "./styles";

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { user, logout } = useAuth();

  const history = useHistory();
  const toast = useToast();

  return (
    <Container>
      <NavLeft>
        <LogoImg>
          <Link to="/">
            <img src={Logo} alt="intranerd" width="100" height="100" />
          </Link>
        </LogoImg>
        <Links className={showLinks ? "hidden" : ""}>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/loja">Loja</Link>
          <Link to="/cadastro">Cadastre-se</Link>
          <Link to="/login">Login</Link>
          {user && <Link to="/logout" 
          onClick={async (e) => {
              e.preventDefault();
              logout()
          }}>Logout</Link>}
          <button onClick={() => setShowLinks(!showLinks)}>
            <BarsIcon />
          </button>
        </Links>
      </NavLeft>

      <NavRight>
        <InputWrapper>
          <Input type="text" placeholder="pesquisar..." />
          <SearchIcon />
        </InputWrapper>
        <ButtonWrapper>
          <Link to="carrinho">
            <BagIcon />
          </Link>
          <Link to="config">
            <UserIcon />
          </Link>
        </ButtonWrapper>
      </NavRight>
    </Container>
  );
};

export default Navbar;
