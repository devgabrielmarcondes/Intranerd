import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoTab = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  height: 15rem;
  background-color: var(--grey-dark);
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding-left: 0.8rem;

  cursor: pointer;

  &:hover {
    background-color: var(--grey);
  }

  > p {
    font-family: "Mukta", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.4rem;

  > h1 {
    font-size: 2.6rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
`;

export const Information = styled.div`
  > p {
    font-family: "Mukta", sans-serif;
    font-size: 1.8rem;

    > span {
      color: var(--black-text);
    }
  }
`;
