import styled from 'styled-components';

import background from "../../assets/images/quem_somos_nos.jpg";

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
  filter: drop-shadow();
  margin-bottom: 6rem;

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
      max-width: 90rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;

  > button {
      transform: skewX(-5deg);
      text-transform: uppercase;
      width: 19.2rem;
      height: 5rem;
      background-color: var(--green);
  }

  > button:nth-child(2) {
    transform: skewX(-5deg);
    text-transform: uppercase;
    width: 19.2rem;
    height: 5rem;
    border: .2rem solid var(--green);
    background-color: transparent;
    margin-left: 3.2rem;
  }

  .btn {
  display: inline-block;
  border-radius: 3px;
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

.btn-secondary {
  display: inline-block;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #EA1D22;
  padding: 10px 32px;
  text-transform: uppercase;
  -webkit-transform: skewX(-10deg);
          transform: skewX(-10deg);
  -webkit-transition: .7s ease;
  transition: .7s ease;
  overflow: hidden;
  z-index: 700;
  position: relative;
}

@media screen and (max-width: 960px) {
  .btn-secondary {
    display: none;
  }
}

.btn-secondary::after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: -5px;
  background: var(--green);
  border-radius: 3px;
  width: 0%;
  height: 110%;
  z-index: -1;
  -webkit-transition: .7s ease;
  transition: .7s ease;
}

.btn-secondary:hover {
  -webkit-box-shadow: 0px 14px 85px rgba(240, 42, 47, 0.06), 0px 5.11023px 31.0264px rgba(240, 42, 47, 0.0413989), 0px 2.48092px 15.0627px rgba(240, 42, 47, 0.0333774), 0px 1.21619px 7.38404px rgba(240, 42, 47, 0.0266226), 0px 0.48089px 2.91966px rgba(240, 42, 47, 0.0186011);
          box-shadow: 0px 14px 85px rgba(240, 42, 47, 0.06), 0px 5.11023px 31.0264px rgba(240, 42, 47, 0.0413989), 0px 2.48092px 15.0627px rgba(240, 42, 47, 0.0333774), 0px 1.21619px 7.38404px rgba(240, 42, 47, 0.0266226), 0px 0.48089px 2.91966px rgba(240, 42, 47, 0.0186011);
  -webkit-transform: scale(1.05) skewX(-10deg);
          transform: scale(1.05) skewX(-10deg);
}

.btn-secondary:hover::after {
  opacity: 1;
  width: 120%;
}
`;

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  text-align: center;

  margin-top: 8rem;
  margin-bottom: 7.2rem;
`;