import styled, { css } from "styled-components";

import { Phone, Email, Location, Google, Login } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }

  > h2 {
    font-family: "Mukta", sans-serif;
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--black-text);
    margin-bottom: 4rem;
  }
`;

export const FormArea = styled.div`
  display: flex;

  background-color: var(--white-light);
  padding: 0.8rem;
  border-radius: 2rem;
  width: 122.4rem;
  height: 55.6rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 35%;

  width: 43.1rem;
  height: 54rem;
  border-radius: 2rem;
  padding: 1.6rem;

  background-color: var(--sec-purple-dark);

  > h1 {
    font-size: 3.6rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }

  > h3 {
    font-family: "Mukta", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 4.8rem;
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 3.2rem;
  height: 3.2rem;

  fill: var(--purple-light);
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  &:nth-child(2) {
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }
`;

export const PhoneIcon = styled(Phone)`
  ${iconCSS};
`;

export const EmailIcon = styled(Email)`
  ${iconCSS};
`;

export const LocationIcon = styled(Location)`
  ${iconCSS};
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 65%;

  padding: 9.8rem 14.4rem 1.4rem 6.4rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;

  p {
    font-family: "Mukta", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--black-text);
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
  }

  input {
    border-bottom: 3px solid var(--black-text);
    width: 100%;
    height: 3.6rem;
    color: var(--black-light);
  }
`;

export const GoogleBtn = styled.button`
  background-color: var(--red);
  width: 100%;
  padding: 1rem;

  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;

  font-family: "Mukta", sans-serif;
  font-weight: 700;

  transform: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const GoogleIcon = styled(Google)`
  width: 1.8rem;
  height: 1.8rem;
  fill: var(--white);
  margin-left: 1rem;
`;

export const Separator = styled.div`
  &::before {
    content: "";
    flex: 1;
    height: 0.2rem;
    background-color: #c4c4c4;
    margin-right: 0.3rem;
  }

  &::after {
    content: "";
    flex: 1;
    height: 0.2rem;
    background-color: #c4c4c4;
    margin-left: 0.3rem;
  }

  display: flex;
  align-items: center;

  margin: 1rem 0;

  > p {
    font-size: 1.4rem;
    font-family: "Mukta", sans-serif;
    font-weight: 500;
    color: #c4c4c4;
  }
`;

export const LoginIcon = styled(Login)`
  width: 2.4rem;
  height: 2.4rem;
  fill: var(--white);
  margin-left: 1rem;
`;
