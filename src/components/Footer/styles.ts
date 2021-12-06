import { Whiteboard } from "@styled-icons/fluentui-system-filled";
import styled, { css } from "styled-components";

import { Instagram, Twitter, Facebook, Youtube } from "../../styles/icons";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    background-color: var(--purple-dark);
`;

export const Dados = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 115rem;
    margin-top: 1.6rem;
`;

export const Institucional = styled.div`
    margin-right: 8.5rem;

    > h1 {
        font-size: 3.6rem;
        text-transform: uppercase;
        color: var(--background);
    }

    > h2 {
        font-size: 1.6rem;
        color: var(--white);
    }
`;

export const Paginas = styled.div`
    margin-right: 8.5rem;

    > h1 {
        font-size: 3.6rem;
        text-transform: uppercase;
        color: var(--background);
    }

    > h2 {
        font-size: 1.6rem;
        color: var(--white);
    }
`;

export const Horario = styled.div`
    margin-right: 8.5rem;

    > h1 {
        font-size: 3.6rem;
        text-transform: uppercase;
        color: var(--background);
    }

    > h2 {
        font-size: 1.6rem;
        color: var(--white);
    }
`;

export const Separator = styled.div`
    width: 115rem;
    height: .3rem;
    background-color: var(--green-light);
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
`;

export const Redes = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 115rem;

    > h1 {
        font-size: 3.6rem;
        text-transform: uppercase;
        color: var(--background);
    }

    > h2 {
        font-size: 1.6rem;
        color: var(--white);
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2.4rem;
`;

const iconCSS = css`
    width: 4rem;
    height: 4rem;
    fill: var(--white);
    flex-shrink: 0;
`

export const InstagramI = styled(Instagram)`
    ${iconCSS};
    &:hover {
        fill: #e14840;
    }
`;

export const TwitterI = styled(Twitter)`
    ${iconCSS};
    &:hover {
        fill: #1DA1F2;
    }
`;

export const FacebookI = styled(Facebook)`
    ${iconCSS};
    &:hover {
        fill: #4267B2;
    }
`;

export const YoutubeI = styled(Youtube)`
    ${iconCSS};
    &:hover {
        fill: #FF0000;
    }
`;