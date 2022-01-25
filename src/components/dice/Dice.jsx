import React, { useState } from 'react';
import './Dice.css'

const Dice = ({getNumber}) => {
  const [randomNum, setRandomNum] = useState(0)

  const getRandomNum = () => {
    const minNum = 1;
    const maxNum = 5;
    const randomNumber = Math.floor(Math.random()*(maxNum-minNum+1)+minNum)
    setRandomNum(randomNumber)
    getNumber(randomNumber)
  }

  return (
    <>
      <div className='diceComponent-wrapper'>
        <div className='dice-wrapper'>
          <h1>{randomNum}</h1>
          <img width='100px' src='https://images.nexusapp.co/assets/74/2c/be/251752258.jpg' />
        </div>
        <button className='dice-btn' onClick={getRandomNum}>Lanza el dado</button>
    </div>
    </>
    
  )

}

export default Dice;