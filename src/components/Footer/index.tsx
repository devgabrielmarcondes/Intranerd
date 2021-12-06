import React from "react";

import { Container, Dados, Redes, Institucional, Paginas, Horario, Separator, InstagramI, TwitterI, FacebookI, YoutubeI, Icons } from "./styles"

import { Link } from "@chakra-ui/react";

const Footer: React.FC = () => {
    return (
        <Container>
            <Dados>
                <Institucional>
                    <h1>Institucional</h1>
                    <h2><Link href="sobre">Quem somos</Link></h2>
                    <h2><Link href="login">Login</Link></h2>
                    <h2><Link href="cadastro">Cadastrar</Link></h2>
                </Institucional>
                <Paginas>
                    <h1>Páginas</h1>
                    <h2><Link href="/">Início</Link></h2>
                    <h2><Link href="sobre">Sobre nós</Link></h2>
                    <h2><Link href="loja">Comprar</Link></h2>
                    <h2><Link href="cadastro">Cadastrar</Link></h2>
                </Paginas>
                <Horario>
                    <h1>Horário de atendimento</h1>
                    <h2>Segunda a sexta 8h às 20h, e finais de semana 9h às 14h</h2>
                </Horario>
            </Dados>
            <Separator />
            <Redes>
                <h1>Redes sociais</h1>
                <Icons>
                    <button><InstagramI /></button>
                    <button><TwitterI /></button>
                    <button><FacebookI /></button>
                    <button><YoutubeI /></button>
                </Icons>
            </Redes>
        </Container>
    )
}

export default Footer;