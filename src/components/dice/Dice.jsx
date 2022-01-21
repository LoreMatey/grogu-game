import React, { useState } from 'react';

const Dice = () => {
  const [randomNum, setRandomNum] = useState(0)

  const getRandomNum = () => {
    const minNum = 1;
    const maxNum = 5;
    setRandomNum(Math.floor(Math.random()*(maxNum-minNum+1)+minNum))
    if(randomNum === 1) {
      alert('saca una galleta');
    }
  }

  return (
    <>
      <h1>The number is:{randomNum}</h1>
      <button onClick={getRandomNum}>Tira el dado</button>
    </>
  )

}

export default Dice;