import { generate as id } from 'shortid';
import React, { useState } from 'react';

const Eggs = () => {
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);

  const subItem = () => {
    console.log(eggs.length)
    // console.log(eggs)
        const indexEgg = eggs.lastIndexOf('🥚');
        const newEggs = eggs.splice(indexEgg, 1);
        setEggs(newEggs);
        console.log(eggs.length);
        return [newEggs]
      
      
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