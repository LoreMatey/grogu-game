import React, { useState } from 'react';
import { generate as id } from 'shortid';
// const Cookies = () => {
//   const cookies = ['1', '2', '3'];
 
//   return (
//     <>
//       <ul>
//         {
//           cookies.map((cookie, index) => {
//           return <li key={index}>{cookie}</li>
//           }).splice(3, 3)
//         }
//       </ul>
//     </>
    
//   )
  
// }

// const Cookies = () => {
//   const [cookies, setCookies] = useState(['🍪', '🍪', '🍪'])

//   const addItem = () => {
//     setCookies([...cookies, {
//       // id: cookies.length,
//       value: '🍪'
//     }])
//   }
//   return(
//     <>
//       <h1>My array of cookies</h1>
//       <button onClick={addItem}>Añade una cookie</button>

//       <ul>
//         {
//           cookies.map((cookie, index) => (
//             <li key={index}>{cookie.value}</li>
//           ))
//         }
//       </ul>
//     </>
//   )
// }

const Cookies = () => {
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪'])

  const subItem = () => {
    console.log(cookies.length)
      if(cookies.length > 0) {
        const newCookies = setCookies([cookies.pop()]);
        setCookies([...cookies, newCookies]);
        console.log(cookies.length);
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
