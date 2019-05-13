import React from 'react';

const Results = (props) => {
  const resultsArray = props.coffees.map((coffee) => {
    let result = coffee.expectedUse - (coffee.inventory + coffee.order1 + coffee.order2);
    result = Math.floor(result);
    if (result < 0) {
      result = 0;
    };
    return <li className="resultLine">{result} bags of {coffee.name}</li>
  });

  return (
    <div className="question">
      <h1>You should order...</h1>
      <ul>
          {resultsArray}
      </ul>
    </div>
  );
};

export default Results;
