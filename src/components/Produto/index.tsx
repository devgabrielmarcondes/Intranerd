import { Badge } from "@chakra-ui/layout";
import React from "react";

import { Container, Image, Content, Header, Body } from "./styles";

export interface ProdutoProps {
  nome: string;
  price: number;
  discount: number;
  descript: string;
  source: string;
}

const Produto: React.FC<ProdutoProps> = ({
  nome,
  price,
  discount,
  descript,
  source,
}) => {
  return (
    <Container>
      <Image>
        <img src={source} alt="" />
      </Image>
      <Content>
        <Header>
          <h1>R${price}</h1>
          {discount > 0 ? (
            <Badge
              ml="1.6rem"
              variant="solid"
              fontSize="0.8em"
              colorScheme="green"
              borderRadius="lg"
            >
              {discount}% OFF
            </Badge>
          ) : (
            ""
          )}
        </Header>
        <Body>{nome}</Body>
      </Content>
    </Container>
  );
};

export default Produto;
