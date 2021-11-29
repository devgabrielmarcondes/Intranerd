import React from "react";

import { Link } from "@chakra-ui/react";

import { Container, Icone, ArrowRightI } from "./styles";

import { useHistory } from "react-router-dom";

export interface CategoriaProps {
    name: string;
    bg?: string;
}

const classes = `console desktop perif`

const Categoria: React.FC<CategoriaProps> = ({name, bg}) => {
  const history = useHistory();

  function navigateToCategory() {
    history.push("/");
  }
  return (
    <Container
      name={name}
      bg={bg}
    >
      <h1>{name}</h1>
      <Icone onClick={navigateToCategory}>
        <Link>Visitar</Link>
        <ArrowRightI />
      </Icone>
    </Container>
  );
};

export default Categoria;
