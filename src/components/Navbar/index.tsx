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
import { getAuth, signOut } from "@firebase/auth";

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { user, currentUser } = useAuth();

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
          {!user && <Link to="/cadastro">Cadastre-se</Link>}
          {!user && <Link to="/login">Login</Link>}
          {user && <Link to="/logout" 
          onClick={async (e) => {
              e.preventDefault();
              const auth = getAuth();
              signOut(auth);
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
          {!user ? <Link to="login">
            <UserIcon />
          </Link> : <Link to="config">
            <UserIcon />
          </Link>}
        </ButtonWrapper>
      </NavRight>
    </Container>
  );
};

export default Navbar;
