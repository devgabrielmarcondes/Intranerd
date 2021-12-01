import React from "react";

import Categoria from "../Categoria";
import { useHistory } from "react-router-dom";
import { Container, Banner, Categorias, Wrapper, Catalogo, WrapperCat } from "./styles";
import { Box } from "@chakra-ui/react";

import Console from "../../assets/images/console.jpg";
import Desktop from "../../assets/images/desktop.jpg";
import Perif from "../../assets/images/perifim.jpg";

const MainHome: React.FC = () => {
  const history = useHistory();

  function navigateToCategory() {
    history.push("/loja");
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
        <Wrapper>
          <Box
            bgImage={Console}
            bgPosition="center"
            bgRepeat="no-repeat"
            w="32.4rem"
            h="34.4rem"
            borderRadius="3rem"
            cursor="pointer"
            onClick={navigateToCategory}
          >
            <Categoria name="Console" />
          </Box>
          <Box
            bgImage={Desktop}
            w="32.4rem"
            h="34.4rem"
            borderRadius="3rem"
            cursor="pointer"
            onClick={navigateToCategory}
          >
            <Categoria name="Desktop" />
          </Box>
          <Box
            bgImage={Perif}
            bgPosition="center"
            bgRepeat="no-repeat"
            w="32.4rem"
            h="34.4rem"
            borderRadius="3rem"
            cursor="pointer"
            onClick={navigateToCategory}
          >
            <Categoria name="Periféricos" />
          </Box>
          
        </Wrapper>
      </Categorias>

      <Catalogo>
        <h1>Novos no catálogo</h1>
        <WrapperCat>
          <img src={Desktop} alt="" className="img-grid fimage" />
          <img src={Desktop} alt="" className="img-grid" />
          <img src={Desktop} alt="" className="img-grid" />
          <img src={Desktop} alt="" className="img-grid" />
          <img src={Desktop} alt="" className="img-grid" />
        </WrapperCat>
      </Catalogo>
    </Container>
  );
};

export default MainHome;
