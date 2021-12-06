import React from "react";

import { Container, Banner, Ferramentas, Filtro, Categorias } from "./styles";

import { Link } from "@chakra-ui/react";

const MainShop: React.FC = () => {
  return (
    <Container>
      <Banner>
        <div>
          <h1>Catálogo</h1>
        </div>
      </Banner>
      <Ferramentas>
        <Filtro>
          <h1>Filtro</h1>
        </Filtro>
        <Categorias>
          <h1><Link>Eletrônicos</Link></h1>
        </Categorias>
      </Ferramentas>
    </Container>
  );
};

export default MainShop;
