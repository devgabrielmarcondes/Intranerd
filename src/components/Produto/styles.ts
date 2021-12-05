import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 30rem;
    height: 54rem;
    flex-direction: column;
    cursor: pointer;
    margin-left: 1.6rem;
`;

export const Image = styled.div`
    display: flex;
    flex: 63%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 37%;
    background-color: var(--white);
    border-radius: 0 0 .5rem .5rem;
`;


export const Header = styled.div`
    display: flex;
    font-size: 2rem;
    margin-top: .8rem;
    margin-bottom: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    > h1 {
        color: var(--black);
        margin-left: .8rem;
    }
`;

export const Body = styled.div`
    font-family: "Mukta", sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--black);
    margin-left: .8rem;

`;
