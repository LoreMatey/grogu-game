import React, { useState, useEffect } from 'react';
import './Path.css';
import WinningGame from '../pop-ups/start-game/WinningGame';
import groguImg from '../../images/grogu.jpg'

const grogu = <img className='grogu' width='40px' src={groguImg} />

const Path = () => {
  const [path, setPath] = useState([grogu, '', '', '', '', '', '', '🟫']);

  useEffect(() => {
    if(path.length === 1){
      console.log('Grogu se ha comido todo')
    }
  }, [path]);


  const nextBox = () => {
    const lastIndexOfTile = path.lastIndexOf('')
      const newPath = path.splice(lastIndexOfTile, 1);
      setPath([...path], newPath)
  }

  const prevBox = () => {
    if(path.length < 8) {
      const indexOfGrogu = path.lastIndexOf(grogu)
      const newPathBack = path.splice(1, indexOfGrogu,'');
      setPath([...path], newPathBack);
    }
    
  }

  return (
    <div className='path-wrapper'>
      <h2>El camino hacia el armario</h2>
      <ul className='path'>
        {
          path.map((object, index) => (
            <li key={index}>{object}</li>
          ))
        }
      </ul>
      <button onClick={prevBox}>
        Retrocede una casilla
      </button>
      <button onClick={nextBox}>
        Avanza una casilla
      </button>
      <WinningGame showWin={path.length === 1}/>
        
    </div>
  )
}

export default Path;