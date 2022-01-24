import React, { useState, useEffect } from 'react';
import './Dice.css'
import WinningGame from '../pop-ups/start-game/WinningGame'
import Cookies from '../closet/Cookies';
import Eggs from '../closet/Eggs';

const Dice = ({subItem}) => {
  const [randomNum, setRandomNum] = useState(0)

  useEffect(() => {  
    if(randomNum === 1){
    }
  }, [randomNum]);

  const getRandomNum = () => {
    const minNum = 1;
    const maxNum = 5;
    setRandomNum(Math.floor(Math.random()*(maxNum-minNum+1)+minNum))
    // if(randomNum === 1) {
    //   usarSubItem()
    //   console.log('Saca una galleta')
    // }
    if(randomNum === 1) {
      console.log('Hey')
      subItem()
    }
  }

  return (
    <>
      <div className='diceComponent-wrapper'>
        <div className='dice-wrapper'>
          <h1>{randomNum}</h1>
          <img width='100px' src='https://images.nexusapp.co/assets/74/2c/be/251752258.jpg' />
        </div>
        <button className='dice-btn' onClick={getRandomNum}>Lanza el dado</button>
      
      
      {/* <Cookies diceNum={getRandomNum}/> */}
      {/* <Cookies subItem={randomNum === 1} /> */}
      {/* <WinningGame showWin={randomNum === 1}/> */}
    </div>
    <Cookies randomNum={randomNum}></Cookies>
    <Eggs />
    </>
    
  )

}

export default Dice;