import styled from 'styled-components';

import { ArrowRight } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 32.4rem;
  height: 34.4rem;
  background: var(--white);

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
