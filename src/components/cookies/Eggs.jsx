import { generate as id } from 'shortid';
import React, { useState } from 'react';

const Eggs = () => {
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);

  const subItem = () => {
    console.log(eggs.length)
    // console.log(eggs)
      if(eggs.length > 0) {
        const indexEgg = eggs.lastIndexOf('🥚');
        const newEggs = eggs.splice(indexEgg, 1);
        setEggs([...eggs], newEggs);
        console.log(eggs.length); 
      } else {
        alert('Ye te has llevado todos los huevos')
      }
  }

  return(
    <>
      <h1>My array of eggs</h1>
      <button onClick={subItem}>Resta un huevo</button>

      <ul>
        {
          eggs.map((egg, index) => (
            <li key={index}>{egg}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Eggs;