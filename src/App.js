import React, { Component } from 'react';
import coffees              from './coffees';
import Question             from './components/question';
import OrderArrived         from './components/order-arrived';
import Results              from './components/results';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      coffees: coffees(),
      questionIndex: 0,
      coffeeIndex: 0,
      input: 0,
    };
  };

  nextCoffee(parameter) {             
    let coffees       = this.state.coffees;
    let coffeeIndex   = this.state.coffeeIndex;
    let questionIndex = this.state.questionIndex;
    if ( Number.isInteger(Number(this.state.input)) && Number(this.state.input) >= 0 ) {
      coffees[coffeeIndex][parameter] = parseInt(this.state.input);
      if (coffeeIndex + 1 === coffees.length) {
        coffeeIndex = 0;
        questionIndex++;
      } else {
        coffeeIndex++;
      };
      this.setState({ 
        coffees,
        coffeeIndex,
        questionIndex,
        input: 0
      });
    } else {
      alert("Input is not valid");
      this.setState({ input: 0 });
    }
  };


  questionSelector() {
    let coffees       = this.state.coffees;
    let coffeeIndex   = this.state.coffeeIndex;
    let questionIndex = this.state.questionIndex;
    if (this.state.questionIndex === 0) {
      return (
        <Question 
          questionText="Current Inventory"
          coffeeName={coffees[coffeeIndex].name} 
          handleInputChange={(e) => { this.setState({input: e.target.value}) }}
          input={this.state.input}
          nextCoffee={() => this.nextCoffee("inventory")}
        />
      );
    } else if (this.state.questionIndex === 1) {
      return <OrderArrived
        hasArrived={() => {
          for (let i = 0; i < coffees.length; i++) {
            coffees[i].order1 = 0;
          };
          questionIndex = questionIndex + 2;
          this.setState({ coffees, questionIndex });
        }}
        notArrived={() => {
          questionIndex++;
          this.setState({ questionIndex })
        }}
      />;
    } else if (this.state.questionIndex === 2) {
      return <Question 
        questionText="Last Week's Order"
        coffeeName={coffees[coffeeIndex].name} 
        handleInputChange={(e) => { this.setState({input: e.target.value}) }}
        input={this.state.input}
        nextCoffee={() => this.nextCoffee("order1")}
      />;
    } else if (this.state.questionIndex === 3) {
      return <Question 
        questionText="Most Recent Order"
        coffeeName={coffees[coffeeIndex].name} 
        handleInputChange={(e) => { this.setState({input: e.target.value}) }}
        input={this.state.input}
        nextCoffee={() => this.nextCoffee("order2")}
      />;
    }
    return <Results coffees={this.state.coffees} />;
  }

  render() {
    return (
      <div className="app">
        <header><h1>How Much Coffee</h1></header>
          {this.questionSelector()}
      </div>
    );
  }
}

export default App;
