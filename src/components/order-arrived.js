import React from 'react';

const OrderArrived = (props) => {
  return (
    <div className="question">
      <h1>Has today's order arrived?</h1>
      <button onClick={props.hasArrived}>Yes, today's order has arrived and been unpacked</button>
      <button onClick={props.notArrived}>No, today's order hasn't arrived and been unpacked</button>
    </div>
  );
};

export default OrderArrived;
