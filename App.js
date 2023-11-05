import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';

let colors = ['pink','red','blue','green','yellow','purple']
let score = 0

function App() {

  
  const [boxColor,setBoxColor] = useState(colors[0])
  const [highScore, setHighScore] = useState(0)
  

  const whichBox = (boxid) =>{
    console.log(boxid.target.id)
  }

  //sets the Box color
  const onButtonClick = (color) => () =>{ 
    winLogic(color)
    setBoxColor(color) 
    console.log('onbuttonclick'+boxColor)
    
  }

  const winLogic = (test) => {
   if(boxColor != test){
    score+=1
   }else{
    setHighScore(score)
    score=0
   }
  }

  

  console.log('Current boxColor = '+boxColor)

    useEffect(() => {
      let currentIndex = colors.length, randomIndex;

      while (currentIndex > 0){
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [colors[currentIndex], colors[randomIndex]] = [colors[randomIndex], colors[currentIndex]]
      }
      console.log(colors)
    }, [boxColor]);


  return (
    <div className="MemoryCard">
      <div id='box1' onClick={whichBox} style={{boxColor,}}></div>

      <div id='test'>
        {colors.map((color) => (
          <button
          type='button'
          key={color}
          onClick={onButtonClick(color)}
          >
            {color}
          </button>
        ))}
      </div>

      <div id='score'>Score = {score}</div>
      <div id='highScore'>High Score = {highScore}</div>

    </div>
  );
}

export default App;
