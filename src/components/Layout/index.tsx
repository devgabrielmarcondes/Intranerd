import React from "react";

import { ChakraProvider } from "@chakra-ui/react"

import { Container, Wrapper, Main } from "./styles";

import { Switch, Route } from "react-router-dom";

import { AuthContextProvider } from "../../contexts/AuthContext";

import Navbar from "../Navbar";

import MainHome from "../MainHome";
import MainAbout from "../MainAbout";
import MainShop from "../MainShop";
import MainRegister from "../MainRegister";
import MainLogin from "../MainLogin";
import MainConfig from "../MainConfig";

import Footer from "../Footer";

const Layout: React.FC = () => {
  return (
    <>
    <ChakraProvider>
      <Container>
        <Wrapper>
          <Navbar />
          <Main>
            <Switch>
              <AuthContextProvider>
                <Route path="/" exact component={MainHome} />
                <Route path="/sobre" exact component={MainAbout} />
                <Route path="/loja" exact component={MainShop} />
                <Route path="/cadastro" exact component={MainRegister} />
                <Route path="/login" exact component={MainLogin} />
                <Route path="/config" exact component={MainConfig} />
              </AuthContextProvider>
            </Switch>
          </Main>
          <Footer />
        </Wrapper>
      </Container>
    </ChakraProvider>
    </>
  );
};

export default Layout;
