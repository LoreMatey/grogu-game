import { useState } from 'react';
import './StartGame.css';

const StartGame = () => {

  const [btnPopup, setBtnPopup] = useState(true);

  if(btnPopup === true) {
    return  (
      <div className='startGame-wrapper'>
        <div className='startGame-info'>
          <h1>¡Comienza la aventura!</h1>
          <img alt='Mando y Grogu' className='startGame-img' src='https://i1.wp.com/www.lafosadelrancor.com/wp-content/uploads/2020/06/The-Mandalorian-Publicaciones.jpg?fit=677%2C380&ssl=1' /> 
          <button className='startGame-btn' onClick={() => setBtnPopup(false)}>Comenzar</button>
        </div>
      </div>
    ) 
  } else {
    return('')
  }
  
}

export default StartGame;