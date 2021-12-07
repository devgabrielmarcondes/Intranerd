import styled from 'styled-components';

import background from "../../assets/images/catalogo.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 77.2rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${background}");

  > div {
    margin-top: 27.6rem;
    margin-left: 8rem;

    > h1 {
      font-size: 6rem;
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
  }
`;

export const Ferramentas = styled.div`
  display: flex;
`;

export const Filtro = styled.div`
  display: flex;
  flex-direction: column;

  width: 24rem;
  height: 88rem;
  padding: 5.2rem 3.6rem 3rem 3.2rem;
  margin-right: 2.4rem;
  background-color: var(--grey);

  > h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }
`;

export const Categorias = styled.div`
  display: flex;
  align-items: center;

  width: 104rem;
  height: 13.2rem;
  padding: 0 6.4rem;
  margin-bottom: 2.4rem;
  margin-left: -2.4rem;
  background-color: var(--grey-dark);

  > h1 {
    font-size: 2.4rem;
  }
`;

export const Produtos = styled.div`
  
`;