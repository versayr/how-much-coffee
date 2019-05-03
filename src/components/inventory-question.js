import React from 'react';
import Button from 'react-bootstrap/Button';

const Inventory = (props) => {
  return (
    <div className="question">
      <h1>Inventory:</h1>
      <h2>{props.coffeeName}</h2>
      <div>
        <input autofocus type="number" value={props.input} onChange={props.handleInputChange} />
      </div>
      <Button onClick={props.nextCoffee}>Next</Button>
    </div>
  );
};

export default Inventory;
