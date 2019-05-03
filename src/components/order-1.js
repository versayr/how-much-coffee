import React from 'react';

const Order1 = (props) => {
  return (
    <div className="question">
      <h1>How many 5 pound bags of {props.coffeeName} were ordered one week ago?</h1>
      <input autofocus type="number" value={props.input} onChange={props.handleInputChange} />
      <button onClick={props.nextCoffee}>Next</button>
    </div>
  );
};

export default Order1;
