import React, { useState, useEffect } from "react";

import Categoria from "../Categoria";
import Produto from "../Produto";
import { useHistory } from "react-router-dom";
import { Container, Banner, Categorias, Wrapper, Catalogo, WrapperCat, Maisvendidos, WrapperMais } from "./styles";
import { Box } from "@chakra-ui/react";

import Console from "../../assets/images/console.jpg";
import Desktop from "../../assets/images/desktop.jpg";
import Perif from "../../assets/images/perifim.jpg";
import Iphone from "../../assets/images/iphone.jpg";

import {db} from "../../services/firebase";
import {collection, getDocs} from "firebase/firestore";

const MainHome: React.FC = () => {
  const history = useHistory();

  function navigateToCategory() {
    history.push("/loja");
  }

  const [prods, setProds] = useState([]);
  const prodsCollectionRef = collection(db, "Produtos")

  useEffect(() => {
    const getProds = async () => {
      const data = await getDocs(prodsCollectionRef)
      console.log(data);
    }

    getProds();
  }, [])

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
          <Produto nome="Iphone" price="R$ 1900,00" descript="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo nostrum consequuntur aperiam illo quos animi magni eos suscipit, itaque, quo, facere harum laborum vero debitis possimus repudiandae! Adipisci, recusandae!" source={Desktop} />
          <Produto nome="Iphone" price="R$ 1900,00" descript="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo nostrum consequuntur aperiam illo quos animi magni eos suscipit, itaque, quo, facere harum laborum vero debitis possimus repudiandae! Adipisci, recusandae!" source={Desktop} />
          <Produto nome="Iphone" price="R$ 1900,00" descript="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo nostrum consequuntur aperiam illo quos animi magni eos suscipit, itaque, quo, facere harum laborum vero debitis possimus repudiandae! Adipisci, recusandae!" source={Desktop} />
          <Produto nome="Iphone" price="R$ 1900,00" descript="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo nostrum consequuntur aperiam illo quos animi magni eos suscipit, itaque, quo, facere harum laborum vero debitis possimus repudiandae! Adipisci, recusandae!" source={Desktop} />
        </WrapperMais>
      </Maisvendidos>
    </Container>
  );
};

export default MainHome;
