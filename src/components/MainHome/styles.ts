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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${background}");
  margin-bottom: 12rem;

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

    > button {
      transform: skewX(-5deg);
      text-transform: uppercase;
      width: 19.2rem;
      height: 5rem;
      background-color: var(--green);
    }

  .btn {
  display: inline-block;
  background: var(--green);
  border-radius: 3px;
  padding: 12px 32px;
  text-transform: uppercase;
  -webkit-transform: skewX(-10deg);
          transform: skewX(-10deg);
  -webkit-transition: .7s ease;
  transition: .7s ease;
  position: relative;
}

.btn::after {
  content: '';
  position: absolute;
  display: block;
  top: -2px;
  left: -2px;
  border-radius: 3px;
  opacity: 0;
  width: 20%;
  height: 70%;
  z-index: -1;
  border-top: 3px solid #EDF1F7;
  border-left: 3px solid #EDF1F7;
  -webkit-transition: .7s ease;
  transition: .7s ease;
}

.btn::before {
  content: '';
  position: absolute;
  display: block;
  bottom: -2px;
  right: -2px;
  border-radius: 3px;
  opacity: 0;
  width: 20%;
  height: 70%;
  z-index: -1;
  border-bottom: 3px solid #EDF1F7;
  border-right: 3px solid #EDF1F7;
  -webkit-transition: .7s ease;
  transition: .7s ease;
}

.btn:hover {
  -webkit-box-shadow: 0px 14px 85px rgba(240, 42, 47, 0.06), 0px 5.11023px 31.0264px rgba(240, 42, 47, 0.0413989), 0px 2.48092px 15.0627px rgba(240, 42, 47, 0.0333774), 0px 1.21619px 7.38404px rgba(240, 42, 47, 0.0266226), 0px 0.48089px 2.91966px rgba(240, 42, 47, 0.0186011);
          box-shadow: 0px 14px 85px rgba(240, 42, 47, 0.06), 0px 5.11023px 31.0264px rgba(240, 42, 47, 0.0413989), 0px 2.48092px 15.0627px rgba(240, 42, 47, 0.0333774), 0px 1.21619px 7.38404px rgba(240, 42, 47, 0.0266226), 0px 0.48089px 2.91966px rgba(240, 42, 47, 0.0186011);
  -webkit-transform: scale(1.05) skewX(-10deg);
          transform: scale(1.05) skewX(-10deg);
}

.btn:hover::after {
  opacity: 1;
  top: -2px;
  left: -2px;
}

.btn:hover::before {
  opacity: 1;
  bottom: -2px;
  right: -2px;
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

  .img-grid {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    filter: opacity(7);
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.2) 38.44%, rgba(0, 0, 0, 0) 100%), url(.jpg);
    &:hover {
      cursor: pointer;
    }
  }

  .img-grid:nth-child(1) {
    grid-row-start: 1;
    grid-row-end: 3;
  }

`;

export const Maisvendidos = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: 128rem;

  > h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
  }
`;

export const WrapperMais = styled.div`
  display: flex;
`;

