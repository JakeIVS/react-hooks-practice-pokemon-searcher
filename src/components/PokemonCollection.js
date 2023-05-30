import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ collection }) {
  const cardCollection = collection.map(card=><PokemonCard card={card} key={card.id} />)
  return (
    <Card.Group itemsPerRow={6}>
      {cardCollection}
    </Card.Group>
  );
}

export default PokemonCollection;
