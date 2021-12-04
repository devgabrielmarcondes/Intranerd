import { Badge } from "@chakra-ui/layout";
import React from "react";

import { Container, Image, Content, Header, Body } from "./styles";

export interface ProdutoProps {
  nome: string;
  price: string;
  descript: string;
  source: string;
}

const Produto: React.FC<ProdutoProps> = ({ nome, price, descript, source }) => {
    function getRandomArbitrary(min:number, max:number) {
        return Math.random() * (max - min) + min;
      }

      function getRandomInt(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

  return (
    <Container>
      <Image>
        <img src={source} alt="" />
      </Image>
      <Content>
        <Header>
          <h1>R${getRandomArbitrary(39.99, 79.99).toFixed(2).replace(".",",")}</h1>
          <Badge ml="1.6rem" variant="solid" fontSize="0.8em" colorScheme="green" borderRadius="lg">
          {getRandomInt(5, 10)}% OFF
          </Badge>
        </Header>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada mi
          pharetra lobortis suscipit odio.
        </Body>
      </Content>
    </Container>
  );
};

export default Produto;
