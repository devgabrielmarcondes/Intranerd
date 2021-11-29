import React from "react";

import Categoria from "../Categoria";
import { useHistory } from "react-router-dom";
import { Container, Banner, Categorias, Slider } from "./styles";

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
            fringilla bibendum mi, massa nunc ornare at.
          </p>
          <button>Loja</button>
        </div>
      </Banner>
      <Categorias>
        <h1>Categorias</h1>
        <Slider>
          <Categoria name="Console" bg="" />
          <Categoria name="Desktop" />
          <Categoria name="Periféricos" />
          <Categoria name="Periféricos" />
        </Slider>
      </Categorias>
    </Container>
  );
};

export default MainHome;
