import React from 'react';
import Button from 'react-bootstrap/Button';

const Question = (props) => {
  return (
    <div className="question">
      <h1>{props.questionText}:</h1>
      <h2>{props.coffeeName}</h2>
      <div>
        <input className="mb-2" autofocus type="number" value={props.input} onChange={props.handleInputChange} />
      </div>
      <Button onClick={props.nextCoffee}>Next</Button>
    </div>
  );
};

export default Question;
