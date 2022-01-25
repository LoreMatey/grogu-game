import { generate as id } from 'shortid';
import LosingGame from '../pop-ups/LosingGame';
import groguImg from '../../images/grogu.jpg';
import './Path.css';

const grogu = <img alt='ficha de Grogu' className='grogu' src={groguImg} />
const closetImg = <img alt='ficha de armario' className='closet-img' src='https://image.freepik.com/vector-gratis/armario-cajon-diseno-interiores_1308-76277.jpg'/>

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
            <li key={id()}>{object}</li>
          ))
        }
      </ul>
      <LosingGame showWin={position === 7}/>   
    </div>
  )
}

export default Path;