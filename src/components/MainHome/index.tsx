import React from "react";

import { Link } from "@chakra-ui/layout";
import { useHistory } from "react-router-dom";
import { Container, Banner, Categorias, Categoria, Icone, ArrowRightI } from "./styles";

const MainHome: React.FC = () => {
  const history = useHistory();

  function navigateToCategory() {
    history.push("/");
  }
  return (
    <Container>
      <Banner>
        <div>
          <h1>Feito para você</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue fringilla bibendum mi, massa nunc ornare at.</p>
          <button>Loja</button>
        </div>
      </Banner>

      <Categorias>
        <h1>Categorias</h1>
        <Categoria>
          <h1>Nome</h1>
          <Icone onClick={navigateToCategory}>
            <Link>Visitar</Link>
            <ArrowRightI />
          </Icone>
        </Categoria>
      </Categorias>
    </Container>
  );
};

export default MainHome;
