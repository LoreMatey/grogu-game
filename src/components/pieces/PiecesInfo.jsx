import './PiecesInfo.css';
import { generate as id } from 'shortid';
import { pieces } from './PiecesData';


const PiecesInfo = () => {

  return (
    <>
      <div className="pieces-info--wrapper">
        <h2>Fichas del juego</h2>
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
    </>
  
  )
}

export default PiecesInfo