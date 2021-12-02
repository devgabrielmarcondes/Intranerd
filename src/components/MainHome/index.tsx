import React from "react";

import Categoria from "../Categoria";
import { useHistory } from "react-router-dom";
import { Container, Banner, Categorias, Wrapper, Catalogo, WrapperCat, Maisvendidos, WrapperMais } from "./styles";
import { Box } from "@chakra-ui/react";

import Console from "../../assets/images/console.jpg";
import Desktop from "../../assets/images/desktop.jpg";
import Perif from "../../assets/images/perifim.jpg";
import Iphone from "../../assets/images/iphone.jpg";

const MainHome: React.FC = () => {
  const history = useHistory();

  function navigateToCategory() {
    history.push("/loja");
  }

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
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
            bgImage={Iphone}
            bgRepeat="no-repeat"
            w="28rem"
            h="34.4rem"
            borderRadius="3rem"
            cursor="pointer"
            onClick={navigateToCategory}
          >
            <Categoria name="Eletrônicos" />
          </Box>
          <Box
            bgImage={Console}
            bgPosition="center"
            bgRepeat="no-repeat"
            w="28rem"
            h="34.4rem"
            borderRadius="3rem"
            cursor="pointer"
            onClick={navigateToCategory}
          >
            <Categoria name="Console" />
          </Box>
          <Box
            bgImage={Desktop}
            w="28rem"
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
            w="28rem"
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

      <Maisvendidos>
        <h1>Mais vendidos</h1>
        <WrapperMais>
        {/*<Box display="flex" w="31.5rem" h="54rem">
            <Box display="flex" flex="63%">

            </Box>
            <Box display="flex" flex="37%">
              <Title>
                
              </Title>
              <Desc>

              </Desc>
            </Box>
          </Box>*/}
        </WrapperMais>
      </Maisvendidos>
    </Container>
  );
};

export default MainHome;
