import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ card }) {
  const [faceFront, setFaceFront] = useState(true)
  return (
    <Card>
      <div>
        <div className="image">
          {faceFront ? 
          <img src={card.sprites.front} alt={card.name} onClick={()=>setFaceFront(false)} /> :
          <img src={card.sprites.back} alt={card.name} onClick={()=>setFaceFront(true)} />
          }
        </div>
        <div className="content">
          <div className="header">{card.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {card.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
