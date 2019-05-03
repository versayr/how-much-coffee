import React from 'react';

const Order2 = (props) => {
  return (
    <div className="question">
      <h1>How many 5 pound bags of {props.coffeeName} were ordered in the most recent order?</h1>
      <input autofocus type="number" value={props.input} onChange={props.handleInputChange} />
      <button onClick={props.nextCoffee}>Next</button>
    </div>
  );
};

export default Order2;

