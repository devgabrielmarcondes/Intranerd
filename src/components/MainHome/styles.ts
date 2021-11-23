import styled from "styled-components";

import background from "../../assets/images/feito_para_vc.jpg";
import { ArrowRight } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 77.2rem;
  background-image: url("${background}");
  margin-bottom: 12rem; 

  > div {
    margin-top: 27.6rem;
    margin-left: 8rem;

    > h1 {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 1.6rem;
    }

    > p {
      font-family: "Mukta", sans-serif;
      font-size: 1.8rem;
      font-weight: 300;
      margin-bottom: 2.4rem;
      max-width: 47.2rem;
    }

    > button {
      transform: skewX(-5deg);
      text-transform: uppercase;
      width: 19.2rem;
      height: 5rem;
      background-color: var(--green);
    }
  }
`;

export const Categorias = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Categoria = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;
  height: 34.4rem;
  border-radius: 3rem;
`;

export const Icone = styled.div`
  cursor: pointer;
`;

export const ArrowRightI = styled(ArrowRight)`
  width: 2rem;
  height: 2rem;
  fill: var(--white);
  margin-left: 0.4rem;
`;