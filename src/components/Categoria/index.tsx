import React from "react";

import { Link } from "@chakra-ui/react";

import { Container, Icone, ArrowRightI } from "./styles";

import { useHistory } from "react-router-dom";

export interface CategoriaProps {
    name: string;
}

const Categoria: React.FC<CategoriaProps> = ({name}) => {
  const history = useHistory();

  function navigateToCategory() {
    history.push("/");
  }
  return (
    <Container>
      <h1>{name}</h1>
      <Icone onClick={navigateToCategory}>
        <Link>Visitar</Link>
        <ArrowRightI />
      </Icone>
    </Container>
  );
};

export default Categoria;
