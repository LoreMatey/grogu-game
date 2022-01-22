import Cookies from "../components/cookies/Cookies";
import Dice from '../components/dice/Dice'
import Eggs from "../components/cookies/Eggs";
import Path from "../components/path/Path";
import StartGame from "../components/pop-ups/start-game/StartGame";

const Game = () => {

  return (
    <>
      <h1>Game!</h1>
      <Cookies />
      <Eggs />
      <Dice />
      <Path />
      <StartGame />
    </>
  )
}

export default Game;