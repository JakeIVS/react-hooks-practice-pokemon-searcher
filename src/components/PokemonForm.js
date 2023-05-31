import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontImage, setFrontImage] = useState('')
  const [backImage, setBackImage] = useState('')
  function changeName(e) {
    setName(e.target.value)
  }
  function changeHp(e) {
    setHp(e.target.value)
  }
  function changeFrontImage(e) {
    setFrontImage(e.target.value)
  }
  function changeBackImage(e) {
    setBackImage(e.target.value)
  }
  function handleSubmit() {
    const newEntry = {
      'name': name,
      'hp': parseInt(hp),
      'sprites': {
        'front': frontImage,
        'back': backImage
      }
    }
    onAddPokemon(newEntry)
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => handleSubmit()}
      >
        <Form.Group widths="equal" >
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={changeName} value={name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={changeHp} value={hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={changeFrontImage}
            value={frontImage}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={changeBackImage}
            value={backImage}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
