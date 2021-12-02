import React from "react";

import { Container, Image, Content } from "./styles";

export interface ProdutoProps {
    nome: string;
    price: string;
    descript: string;
    source: string;
}


const Produto: React.FC<ProdutoProps> = ({nome, price, descript, source}) => {
    return(
        <Container>
            <Image>
                <img src={source} alt="" />
            </Image>
            <Content>

            </Content>
        </Container>
    )
}

export default Produto;