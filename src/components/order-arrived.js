import React from 'react';
import Button from 'react-bootstrap/Button';

const OrderArrived = (props) => {
  return (
    <div className="question">
      <h2>Has today's order arrived?</h2>
      <Button block onClick={props.hasArrived}>Yes, today's order has arrived and been unpacked</Button>
      <Button block onClick={props.notArrived}>No, today's order hasn't arrived and been unpacked</Button>
    </div>
  );
};

export default OrderArrived;
