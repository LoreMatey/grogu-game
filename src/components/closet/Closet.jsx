import React, { useState } from 'react';
import { generate as id } from 'shortid';

const defaultCloset = {
  cookies: [],
  eggs: [],
  froggs: []
}

const Closet = ({closet = defaultCloset}) => {
  
  const {cookies, eggs, froggs} = closet

  return(
    <>
      <h1>My array of cookies</h1>

      <ul>
        {
          cookies.map((cookie, index) => (
            <li key={id()}>{cookie}</li>
          ))
        }
      </ul>
      <ul>
        {
          eggs.map((egg, index) => (
            <li key={id()}>{egg}</li>
          ))
        }
      </ul>
      <ul>
        {
          froggs.map((frogg, index) => (
            <li key={id()}>{frogg}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Closet;
