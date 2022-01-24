import React, { useState } from 'react';
import { generate as id } from 'shortid';


const Cookies = ({randomNum}) => {
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);

  // const usarSubItem = (cookies) => {
  //   if(randomNum === 1) {
  //     subItem(cookies)
  //   }
  // }


  const subItem = () => {
    console.log(cookies.length)
      if(cookies.length > 0) {
        const indexCookies = cookies.lastIndexOf('🍪');
        const newCookies = cookies.splice(indexCookies, 1);
        setCookies([...cookies], newCookies);
        console.log(cookies.length);
        console.log({randomNum})
        
      } else {
        console.log('Ya te has llevado todas las galletas')
      }
  }
  
  return(
    <>
      <h1>My array of cookies</h1>
      <button onClick={subItem}>Resta una cookie</button>

      <ul>
        {
          cookies.map((cookie, index) => (
            <li key={id()}>{cookie}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Cookies;
