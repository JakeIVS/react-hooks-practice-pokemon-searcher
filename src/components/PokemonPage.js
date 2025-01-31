import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [collection, setCollection] = useState([])
  const [search, setSearch] = useState('')
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(r=>r.json())
    .then(cards=>setCollection(cards))
  }, [])
  function handleSearch(e){
    setSearch(e.target.value)
  }
  const filteredCards = collection.filter(card=>card.name.toLowerCase().includes(search.toLowerCase()))
  function addPokemon(newData) {
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify(newData)
    })
    .then(r=>r.json())
    .then(data=> setCollection([data, ...collection]))
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon} />
      <br />
      <Search onSearch={handleSearch} search={search} />
      <br />
      <PokemonCollection collection={filteredCards} />
    </Container>
  );
}

export default PokemonPage;
