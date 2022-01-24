import './WinningGame.css';
import { useState } from 'react';

const WinningGame = ({showWin}) => {
  // console.log({showWin})
  const [showAlert, setShowAlert] = useState(showWin)
    if(showWin === true) {
      return (
        <div>
          <img width ='400px' src='https://imgix.bustle.com/uploads/image/2020/12/22/561ef985-827b-42e6-8fc3-b864b5d02b21-baby-yoda-blue-macarons-main.jpg' />
          <h2>¡Oh no! ¡Grogu se ha comido todo!</h2>
          {/* <button onClick={() => setShowAlert(false)}>Cerrar</button> */}
          <button onClick={() => window.location.reload()}>Volver a jugar</button>
        </div>
      )
    } else {
      return ('')
    }
}

export default WinningGame;