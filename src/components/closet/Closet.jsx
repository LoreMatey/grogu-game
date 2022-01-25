import React, { useState } from 'react'
import { generate as id } from 'shortid'
import './Closet.css';

const defaultCloset = {
  cookies: [],
  eggs: [],
  froggs: []
}

const Closet = ({closet = defaultCloset}) => {
  
  const {cookies, eggs, frogs} = closet

  return(
    <div className='closet-wrapper'>
  
      <ul className='closet-items--wrapper'>
        {
          cookies.map((cookie, index) => (
            <li key={id()}>{cookie}</li>
          ))
        }
      </ul>
      <ul className='closet-items--wrapper'>
        {
          eggs.map((egg, index) => (
            <li key={id()}>{egg}</li>
          ))
        }
      </ul>
      <ul className='closet-items--wrapper'>
        {
          frogs.map((frog, index) => (
            <li key={id()}>{frog}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Closet
