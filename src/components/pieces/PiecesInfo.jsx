import './PiecesInfo.css';
import { generate as id } from 'shortid';
import {
  pieces,
  pieces2
} from './PiecesData';


const PiecesInfo = () => {

  return (
    <>
      <div className="pieces-info--wrapper">
        <div className='pieces-layout'>
      {
        pieces.map((piece) => (
          <div key={id()}
               className="piece-container">
            <img className='piece-img' 
                 src={piece.image}
            />
            <p className="piece-amount">
              {piece.amount}
            </p>
            <p className='piece-title'>
              {piece.title}
            </p>
          </div> 
        ))
      }
        </div>
      </div>

      <div className="pieces-info--wrapper2">
        <div className='pieces-layout'>
      {
        pieces2.map((piece2) => (
          <div key={id()}
               className="piece-container">
            <img className='piece-img' 
                 src={piece2.image}
            />
            <p className="piece-amount">
              {piece2.amount}
            </p>
            <p className='piece-title'>
              {piece2.title}
            </p>
          </div> 
        ))
      }
        </div>
      </div>
    </>
  
  )
}

export default PiecesInfo