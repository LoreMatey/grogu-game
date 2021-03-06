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
          <p style={{fontSize:'36px'}}>{randomNum}</p>
          <img alt="dice" className='dice' src='https://images.nexusapp.co/assets/74/2c/be/251752258.jpg' />
        </div>
        <button className='dice-btn' onClick={getRandomNum}>Lanza el dado</button>
      </div>
    </>
    
  )

}

export default Dice;