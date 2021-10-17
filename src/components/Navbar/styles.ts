import styled, { css } from "styled-components";

import { Bars, Search, Person, ShoppingBag } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 128rem;
  height: 8rem;

  margin-top: 1.6rem;
`;

// Left side of the navbar

export const NavLeft = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoImg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > img {
    width: 10rem;
    height: 8rem;
  }
`;

export const Links = styled.div`
  > a {
    margin-left: 2.4rem;
    font-size: 1.6rem;
  }

  > button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    > a {
      display: none;
    }

    > button {
      display: inline-block;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: var(--black-icon-bg);

      > svg {
        fill: var(--purple);
      }
    }

    .hidden a {
      position: absolute;
      left: 0;
      top: 8rem;

      max-height: 23rem;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      font-size: 2rem;
    }
  }
`;

// Right side of the navbar

export const NavRight = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 43.5rem;
  position: relative;
  padding: 0 1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  padding: 0 3.2rem;

  border-bottom: 0.3rem solid var(--black-icon-bg);

  position: relative;

  &::placeholder {
    color: var(--grey-light);
  }

  ~ svg {
    position: absolute;
    top: 15%;
    left: 1.4rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 14.4rem;
  margin-left: 4rem;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: var(--black-icon-bg);

    > svg {
      fill: var(--purple);
    }
  }
`;

// export const ButtonCart = styled.button`
//   width: 4rem;
//   height: 4rem;
//   border-radius: 50%;
//   background-color: var(--black-icon-bg);

//   > svg {
//     fill: var(--purple);
//   }
// `;

// export const ButtonUser = styled.button`
//   width: 4rem;
//   height: 4rem;
//   border-radius: 50%;
//   background-color: var(--black-icon-bg);

//   > svg {
//     fill: var(--purple);
//   }
// `;

const iconCSS = css`
  flex-shrink: 0;

  width: 3.2rem;
  height: 3.2rem;

  cursor: pointer;

  fill: var(--white);
`;

export const BarsIcon = styled(Bars)`
  ${iconCSS};
`;

export const SearchIcon = styled(Search)`
  ${iconCSS};
`;

export const UserIcon = styled(Person)`
  ${iconCSS};
`;

export const BagIcon = styled(ShoppingBag)`
  ${iconCSS};
`;
