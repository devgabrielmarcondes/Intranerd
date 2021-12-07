import React, { useState, useEffect, SetStateAction } from "react";

import Categoria from "../Categoria";
import Produto from "../Produto";
import { useHistory } from "react-router-dom";
import {
  Container,
  Banner,
  Categorias,
  Wrapper,
  Catalogo,
  WrapperCat,
  Maisvendidos,
  WrapperMais,
} from "./styles";
import { Box } from "@chakra-ui/react";

import Console from "../../assets/images/console.jpg";
import Desktop from "../../assets/images/desktop.jpg";
import Perif from "../../assets/images/perifim.jpg";
import Iphone from "../../assets/images/iphone.jpg";
import Controle from "../../assets/images/controle.jpg";
import Headphone from "../../assets/images/headphone.jpg";
import Lumin from "../../assets/images/lumin.jpg";
import Mask from "../../assets/images/mask.jpg";
import Chair from "../../assets/images/cadeira.jpg";

import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

const MainHome = () => {
  const history = useHistory();

  function navigateToShop() {
    history.push("/loja");
  }

  function navigateToCategory() {
    history.push("/loja");
  }

  function navigateToProduct() {
    history.push("/loja")
  }
 
  const [prods, setProds] = useState([]);
  const prodsCollectionRef = collection(db, "Produtos");

  useEffect(() => {
    const getProds = async () => {
      const data = await getDocs(prodsCollectionRef);
      setProds(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProds();
  }, []);

  return (
    <Container>
      <Banner>
        <div>
          <h1>Feito para você</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
            fringilla bibendum mi, massa nunc ornare at.
          </p>
          <button className="btn" onClick={navigateToShop}>Loja</button>
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
          <img src={Chair} alt="cadeira gamer" className="img-grid fimage" onClick={navigateToProduct} />
          <img src={Headphone} alt="headphone gamer" className="img-grid" onClick={navigateToProduct} />
          <img src={Controle} alt="controle xbox" className="img-grid" onClick={navigateToProduct} />
          <img src={Lumin} alt="luminária google" className="img-grid" onClick={navigateToProduct} />
          <img src={Mask} alt="máscara de pano akatsuki" className="img-grid" onClick={navigateToProduct} />
        </WrapperCat>
      </Catalogo>

      <Maisvendidos>
        <h1>Mais vendidos</h1>
        <WrapperMais>
          {prods.map((prod) => {
            return (
              <div>
                {prod.aval >= 4 ? (
                  <Produto
                    nome={prod.nome}
                    price={prod.preço}
                    discount={prod.desconto}
                    descript={prod.sobre}
                    source={prod.imagem1}
                  />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </WrapperMais>
      </Maisvendidos>
    </Container>
  );
};

export default MainHome;
