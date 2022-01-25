import './LosingGame.css';
import { useState } from 'react';

const LosingGame = ({showWin}) => {
  console.log({showWin})
  const [showAlert, setShowAlert] = useState(showWin)
    if(showWin === true) {
      return (
        <div className='losing-wrapper'>
          <div className='losing-info'>
            <h3>¡Oh no! ¡Grogu se ha comido todo!</h3>
            <img alt='Grogu comiendo galletas azules' width ='500px' src='https://imgix.bustle.com/uploads/image/2020/12/22/561ef985-827b-42e6-8fc3-b864b5d02b21-baby-yoda-blue-macarons-main.jpg' />
            <button onClick={() => window.location.reload()}>Volver a jugar</button>
          </div>
        </div>
      )
    } else {
      return ('')
    }
}

export default LosingGame;