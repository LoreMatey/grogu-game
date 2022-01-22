import Cookies from "../components/cookies/Cookies";
import Dice from '../components/dice/Dice'
import Eggs from "../components/cookies/Eggs";
import Path from "../components/path/Path";

const Game = () => {
  return (
    <>
      <h1>Game!</h1>
      <Cookies />
      <Eggs />
      <Dice />
      <Path />
    </>
  )
}

export default Game;