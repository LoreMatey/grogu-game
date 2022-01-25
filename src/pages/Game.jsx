import './Game.css'
import { useState, useEffect } from 'react';
import Dice from '../components/dice/Dice'
import Path from "../components/path/Path";
import StartGame from "../components/pop-ups/start-game/StartGame";
import Closet from '../components/closet/Closet';
import WinningGame from '../components/pop-ups/WinningGame';

const Game = () => {

  const defaultCloset = {
    cookies: ['🍪', '🍪', '🍪'],
    eggs: ['🥚', '🥚', '🥚'],
    frogs: ['🐸', '🐸', '🐸']
  }
  const [closet, setCloset] = useState(defaultCloset);
  const [youWin, setYouWin] = useState(false); 

  const [groguPosition, setGroguPosition] = useState(0);

  useEffect(() => {
    checkingWin()
  }, [closet]);

// 1	Descargas una caja de galletas azules 🍪
// 2	Descargas un huevo de rana 🥚
// 3	Descargas una rana 🐸
// 4	Grogu avanza una casilla ➡️
// 5	Grogu retrocede una casilla ⬅️

  const controller = (number) => {
    switch (number) {
      case 1:
        removeItem('cookies')
        break;
      
      case 2:
        removeItem('eggs')
        break;

      case 3:
        removeItem('frogs')
        break;

      case 4:
        setGroguPosition(groguPosition + 1)
        break;

      case 5:
        setGroguPosition(groguPosition === 0 ? 0 : groguPosition - 1)
        break;
    
      default:
        break;
    }
  }

  const checkingWin = () => {
    const isClosetEmpty = Object.values(closet).every((item) => item.length === 0)
    if(isClosetEmpty){
      setYouWin(true)
    }
  }

  const getNumber = (number) => {
    controller(number)
  }

  const removeItem = (item) => {
    const newState = {
      ...closet, 
      [item]: closet[item].slice(0, closet[item].length - 1)
    }
    console.log({newState})
    setCloset(newState)
  }

  return (
    <section className='game-wrapper'>
      <Dice getNumber={getNumber}/>
      <div className='board-wrapper'>
        {
          youWin && <WinningGame />
        }
        {
          !youWin && <Path position={groguPosition}/>
        }
        <Closet closet={closet}></Closet>
      </div>
      <StartGame />
      
    </section>
  )
}

export default Game;