import React from 'react';
import './App.css';
import {cardsDeck} from './Assets/cardsDeck';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shuffledcards: cardsDeck,
      cardDrawn:[],
      sortedCards:[]
     
      };
  };
  shuffle = (arr) => {
    for (let num1 = arr.length - 1; num1 > 0; num1--) {
      let num2 = Math.floor(Math.random() * num1);
      let temp = arr[num1];
      arr[num1] = arr[num2];
      arr[num2] = temp;
  }
    this.setState({ shuffledcards: arr })
    console.log(this.state.shuffledcards);
    return arr;
  };

  drawCards = () => {
let shuffledcards = this.state.shuffledcards;
   const item = shuffledcards[Math.floor(Math.random()*shuffledcards.length)];
   
    const newCards= shuffledcards.filter(element => element.index !== item.index)
   
        this.setState({ shuffledcards: newCards })
let cardsSelected = this.state.cardDrawn;
  cardsSelected.length < 52 &&
    cardsSelected.push(item);


    this.setState({ cardDrawn: cardsSelected })

    console.log(this.state.cardDrawn);
  };
  sortCards=()=>{
    let cardtosort = this.state.cardDrawn;
    cardtosort=cardtosort.sort();
   this.setState({sortedCards:cardtosort});
    console.log(this.state.sortedCards);
  }
  render(){
    const {shuffledcards,cardDrawn,sortedCards}=this.state;
    return(
      <div className='main'>
        <h2 className='heading'>iX Cards Test</h2>  
        <div className='options'>
            <div className='deck'>
                <h3>Deck</h3>
                <button className='buttonstyle' onClick={() => this.shuffle(cardsDeck)}>Shuffle</button>
            </div>
      <div className='controls'>
          <h3> Controls</h3>
         
      <button className='buttonstyle' onClick={() => this.drawCards()}>Draw Card</button>
        </div>
        <div className='Hand'>
            <h3>Hand</h3>
            <button className='sortstyle' onClick={() => this.sortCards()}>Sort</button>
            </div>
            </div>
        {shuffledcards.map(
          (item) => {
            return (
              <li className='shuffledlist'>
                <span>{item}</span>
              </li>
            );
          }
        )
      }

      {
        cardDrawn.map((item)=>{
          return(
            <li className='drawlist' >
              <span>{item}</span>
            </li>
          )
        })
      }
     
     {
        sortedCards.map((item)=>{
          return(
            <li className='sortedlist'>
              <span>{item}</span>
            </li>
          )
        })
      }
      </div>
    );
    
  }
  
}