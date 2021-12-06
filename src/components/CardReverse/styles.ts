import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    width: 128rem;
    height: 49.4rem;
    padding: 4.6rem 9.1rem 4.6rem 4.5rem;
    margin-bottom: 3.2rem;
`;


export const Information = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 35.8rem;
    max-height: 4rem;

    > h1 {
        font-size: 3.6rem;
        font-weight: 700;
        margin-bottom: 1.6rem;
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        margin-bottom: 1.6rem;
    }

    > p {
        font-size: 1.8rem;
        font-weight: 400;
    }
`;

export const Image = styled.div`
    display: flex;
    max-width: 50em;
    max-height: 38rem;
    
    > img {
        border-radius: 1rem;
    }
`;
