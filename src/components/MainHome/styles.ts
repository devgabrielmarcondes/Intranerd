import styled from "styled-components";

import background from "../../assets/images/feito_para_vc.jpg";

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
  
  margin-bottom: 12rem;
  max-width: 128rem;

  > h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Catalogo = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 12rem;

  > h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
  }
`;

export const WrapperCat = styled.div`
  display: grid;
  grid-template-columns: 56rem 32rem 32rem; // largura
  grid-template-rows: 28rem 28rem; // altura
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  .fimage {
    grid-row-start: 1;
    grid-row-end: 3;
    cursor: pointer;
  }

  .img-grid {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    filter: opacity(7);
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.2) 38.44%, rgba(0, 0, 0, 0) 100%), url(.jpg);
    cursor: pointer;
  }
`;

export const Maisvendidos = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-bottom: 12rem;
  max-width: 128rem;

  > h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
  }
`;

export const WrapperMais = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

