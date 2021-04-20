import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    const suits = ["Spade", "Heart", "Club", "Diamond"];
    const values = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let cardDeck = [];
    
    for (let x = 0; x < suits.length; x++) {
      for (let y = 0; y < values.length; y++) {
       let cards = {suit: suits[x], val: values[y]};
        cardDeck.push(cards);
      }
    };
    console.log(cardDeck);
    this.state = {
      cardDeck,
      shuffledCards:cardDeck
    }; 
    
  }
  shuffleCards(arr) {
    for (let num1 = arr.length - 1; num1 > 0; num1--) {
      let num2 = Math.floor(Math.random() * num1);
      let temp = arr[num1];
      arr[num1] = arr[num2];
      arr[num2] = temp;
  }
  this.setState({shuffledCards:arr});
  console.log(this.state.shuffledcards);
    return arr;
    
  };
  
  render() {
  
    return (  
      <div>
        <button onClick={() => this.shuffleCards(this.state.cardDeck)}>Shuffle</button>
        <div>
        {
        this.state.cardDeck.map((card, index) => {
            return (
              <li key={index}>
                <span>{card.val} of {card.suit} </span>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
  
}
