import React from "react";

import { Container, Information, Image } from "./styles"
 
interface CardProps {
    nome: string;
    cargo: string;
    descript: string;
    srcc: string;
}

const Card: React.FC<CardProps> = ({nome, cargo, descript, srcc}) => {
    return (
        <Container>
            <Image>
                <img src={srcc} alt="Desenvolvedor Intranerd" width="500" height="380" />
            </Image>
            <Information>
                <h1>{nome}</h1>
                <h2>{cargo}</h2>
                <p>{descript}</p>
            </Information>
        </Container>
    )
}

export default Card;