import React, { useState } from 'react';
import './Path.css';

const Path = () => {
  const [path, setPath] = useState({
    objects: [
      { id: 'grogu',
        value: '🟢'
      },
      { id: 'tile1',
        value: '🟨'
      },
      { id: 'tile2',
        value: '🟨'
      },
      { id: 'tile3',
        value: '🟨'
      },
      { id: 'tile4',
        value: '🟨'
      },
      { id: 'tile5',
        value: '🟨'
      },
      { id: 'tile6',
        value: '🟨'
      },
      { id: 'closet',
        value: '🟫'
      }
    ]
  });

  const prevBox = () => {
    console.log('Retrocede')
  }

  const nextBox = () => {
    console.log('Avanza')
  }


  return (
    <>
      <h2>El camino hacia el armario</h2>
      <ul className='path'>
        {
          path.objects.map((object, index) => (
            <li key={object.id}>{object.value}</li>
          ))
        }
      </ul>
      <button onClick={prevBox}>
        Retrocede una casilla
      </button>
      <button onClick={nextBox}>
        Azanza una casilla
      </button>
        
    </>
  )
}

export default Path;