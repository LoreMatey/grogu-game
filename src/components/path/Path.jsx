import React, { useState } from 'react';
import './Path.css';
import groguImg from '../../images/grogu.jpg'

const groguImage = groguImg;
const grogu = <img className='grogu' width='40px' src={groguImage} />

const Path2 = () => {
  const [path, setPath] = useState([grogu, '', '', '', '', '', '', '🟫']);


  const nextBox = () => {
    if(path.length === 1) {
      alert('¡Oh, no! Grogu ha llegado antes que tú')
    } else {
      const lastIndexOfTile = path.lastIndexOf('')
      const newPath = path.splice(lastIndexOfTile, 1);
      setPath([...path], newPath);
      console.log('Avanza')
      console.log(path.length)
    }
    
    
  }

  const prevBox = () => {
    if(path.length < 8) {
      const indexOfGrogu = path.lastIndexOf('🟢')
      const newPathBack = path.splice(1, indexOfGrogu,'');
      setPath([...path], newPathBack);
      console.log('Retrocede')
      console.log(path.length)
    }
    
  }


  return (
    <>
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
        
    </>
  )
}

export default Path2;