import React, { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/images/Logo.svg";

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
          <Link to="/contato">Contato</Link>
          <Link to="/loja">Loja</Link>
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
