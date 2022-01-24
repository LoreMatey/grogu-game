import './Game.css'
import Cookies from "../components/closet/Cookies";
import Dice from '../components/dice/Dice'
import Path from "../components/path/Path";
import StartGame from "../components/pop-ups/start-game/StartGame";

const Game = () => {

  const prueba = ({name}) => {
    console.log('Me ejecuto y estoy en Game')
    console.log(name)
  }

  return (
    <section className='game-wrapper'>
      <div className='board-wrapper'>
        <Path />
      </div>
      {/* <Cookies /> */}
      <Dice />
      
      <StartGame prueba={prueba}/>
    </section>
  )
}

export default Game;