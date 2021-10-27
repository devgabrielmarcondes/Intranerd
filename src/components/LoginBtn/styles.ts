import styled from "styled-components";

export const LBtn = styled.button`
  background-color: var(--green-dark);
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: "Mukta", sans-serif;
  font-weight: 700;

    transform: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;