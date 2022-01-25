import React, { useState } from 'react'
import { generate as id } from 'shortid'
import './Closet.css';

const defaultCloset = {
  cookies: [],
  eggs: [],
  frogs: []
}

const Closet = ({closet = defaultCloset}) => {
  
  const {cookies, eggs, frogs} = closet

  return(
    <div className='closet-wrapper'>
      <ul className='closet-items--wrapper'>
        {
          cookies.map((cookie, index) => (
            <li className='closet-items' key={id()}>{cookie}</li>
          ))
        }
      </ul>
      <ul className='closet-items--wrapper'>
        {
          eggs.map((egg, index) => (
            <li className='closet-items' key={id()}>{egg}</li>
          ))
        }
      </ul>
      <ul className='closet-items--wrapper'>
        {
          frogs.map((frog, index) => (
            <li className='closet-items' key={id()}>{frog}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Closet
