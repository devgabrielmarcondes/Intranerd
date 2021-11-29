import styled from 'styled-components';

import console from "../../assets/images/console.png"

import { ArrowRight } from "../../styles/icons";

import { CategoriaProps } from ".";

export const Container = styled.div<CategoriaProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 32.4rem;
  height: 34.4rem;
  background-image: ${({ name }) => (name ? "var(--gray)" : "var(--white)")};
  margin-right: 2.4rem;
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
