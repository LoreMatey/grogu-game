import './Path.css';
import LosingGame from '../pop-ups/start-game/LosingGame';
import groguImg from '../../images/grogu.jpg'

const grogu = <img className='grogu' width='40px' src={groguImg} />

const Path = ({position}) => {
  
  const board = ['', '', '', '', '', '', '', '🟫']
  const boardWithGrogu = [
    ...board.slice(0, position),
    grogu, 
    ...board.slice(position + 1, board.length)
  ]

  return (
    <div className='path-wrapper'>
      <h2>El camino hacia el armario</h2>
      <ul className='path'>
        {
          boardWithGrogu.map((object, index) => (
            <li key={index}>{object}</li>
          ))
        }
      </ul>
      <LosingGame showWin={position === 7}/>   
    </div>
  )
}

export default Path;