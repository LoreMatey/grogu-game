import './StartGame.css';
import { useState } from 'react';

const StartGame = ({prueba}) => {

  const [btnPopup, setBtnPopup] = useState(true);

  const newFunction = () => {
    const pokemon = {name: 'Pikachu', lvl: '100'}
    prueba(pokemon)
  }

  if(btnPopup === true) {
    return  (
      <div className='startGame-wrapper'>
        <div className='startGame-info'>
          <h1>¡Comienza la aventura!</h1>
          <img className='startGame-img' src='https://i1.wp.com/www.lafosadelrancor.com/wp-content/uploads/2020/06/The-Mandalorian-Publicaciones.jpg?fit=677%2C380&ssl=1' /> 
          <button className='startGame-btn' onClick={() => setBtnPopup(false)}>Comenzar</button>
          {/* <button onClick={miFuncion}>Hola</button> */}
          {/* <button onClick={()=> miFuncion('Hola, soy una función')}>Hola</button> */}
          <button onClick={newFunction}>Hola</button>
        </div>
      </div>
    ) 
  } else {
    return('')
  }
  
}

export default StartGame;