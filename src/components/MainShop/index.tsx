import React from "react";


import { Container, Banner, Ferramentas, Filtro, Categorias, Produtos } from "./styles";

import { Link } from "@chakra-ui/react";

import algoliasearch from "algoliasearch";
import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom"

const searchClient = algoliasearch(
  'YU3OOTFUEY',
  'efd7e40ea0661d6da085e28493d9f39f'
);
const MainShop: React.FC = () => {
  return (
    <Container>
      <Banner>
        <div>
          <h1>Catálogo</h1>
        </div>
      </Banner>
      <Ferramentas>
        <Filtro>
          <h1>Filtro</h1>
        </Filtro>
        <Categorias>
          <h1><Link>Eletrônicos</Link></h1>
        </Categorias>
      </Ferramentas>
      <Produtos>
        <InstantSearch searchClient={searchClient} indexName={"produtos"} >
          <div className="site-grid">
            <SearchBox />
            <Hits />
          </div>
        </InstantSearch>
      </Produtos>
    </Container>
  );
};

export default MainShop;
