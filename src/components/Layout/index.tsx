import React from "react";

import { Container, Wrapper, Main } from "./styles";

import { Switch, Route } from "react-router-dom";

import MainHome from "../MainHome";
import MainAbout from "../MainAbout";
import MainContact from "../MainContact";
import MainShop from "../MainShop";

import Navbar from "../Navbar";

const Layout: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Navbar />
          <Main>
            <Switch>
              <Route path="/" component={MainHome} />
              <Route path="/sobre" component={MainAbout} />
              <Route path="/contato" component={MainContact} />
              <Route path="/loja" component={MainShop} />
            </Switch>
          </Main>
          {/* <Footer /> */}
        </Wrapper>
      </Container>
    </>
  );
};

export default Layout;
