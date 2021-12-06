import React from "react";

import { Container, Banner, Buttons, Title } from "./styles";

import Card from "../Card";
import CardReverse from "../CardReverse";

const MainAbout: React.FC = () => {
  return (
    <Container>
      <Banner>
        <div>
          <h1>Quem somos nós?</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, maecenas enim magna phasellus feugiat nulla pharetra. Nisi, commodo, sem dictumst id nisl est. Semper nunc varius turpis tincidunt dui.
          </p>
          <Buttons>
            <button className="btn" >Loja</button>
            <button className="btn-secondary" >Contate-nos</button>
          </Buttons>
        </div>
      </Banner>
      <Title>Nossa equipe</Title>
      <Card nome="Gabriel M." cargo="Full Stack" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique lorem consequat, risus dolor ligula. Viverra suspendisse nunc massa orci sollicitudin. Lectus integer magna id congue habitasse. Ac odio purus accumsan, dui urna. Proin mattis" srcc="" />
      <CardReverse nome="Hugo B." cargo="Front-end" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique lorem consequat, risus dolor ligula. Viverra suspendisse nunc massa orci sollicitudin. Lectus integer magna id congue habitasse. Ac odio purus accumsan, dui urna. Proin mattis" srcc="" />
      <Card nome="Bruce A." cargo="Back-end" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique lorem consequat, risus dolor ligula. Viverra suspendisse nunc massa orci sollicitudin. Lectus integer magna id congue habitasse. Ac odio purus accumsan, dui urna. Proin mattis" srcc="" />
      <CardReverse nome="Gabriel S." cargo="Back-end" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique lorem consequat, risus dolor ligula. Viverra suspendisse nunc massa orci sollicitudin. Lectus integer magna id congue habitasse. Ac odio purus accumsan, dui urna. Proin mattis" srcc="" />
      <Card nome="Erick S." cargo="Banco de dados" descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique lorem consequat, risus dolor ligula. Viverra suspendisse nunc massa orci sollicitudin. Lectus integer magna id congue habitasse. Ac odio purus accumsan, dui urna. Proin mattis" srcc="" />
    </Container>
  );
};

export default MainAbout;
