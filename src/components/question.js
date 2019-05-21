import React       from 'react';
import Button      from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

const Question = (props) => {
  return (
    <div className="question">
      <Card className="mb-3">
        <h2>{props.questionText}:</h2>
        <h3>{props.coffeeName}</h3>
        <h2 className="value">{props.value}</h2>
        <ButtonGroup>
          <Button onClick={props.decreaseValue}>-</Button>
          <Button onClick={props.increaseValue}>+</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={props.lastCoffee}>Back</Button>
          <Button onClick={props.nextCoffee}>Next</Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default Question;
