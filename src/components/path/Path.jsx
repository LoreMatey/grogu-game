import './Path.css';
import LosingGame from '../pop-ups/LosingGame';
import groguImg from '../../images/grogu.jpg'

const grogu = <img className='grogu' src={groguImg} />
const closetImg = <img className='closet-img' src='https://image.freepik.com/vector-gratis/armario-cajon-diseno-interiores_1308-76277.jpg'/>

const Path = ({position}) => {
  
  const board = ['', '', '', '', '', '', '', closetImg]
  const boardWithGrogu = [
    ...board.slice(0, position),
    grogu, 
    ...board.slice(position + 1, board.length)
  ]

  return (
    <div className='path-wrapper'>
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