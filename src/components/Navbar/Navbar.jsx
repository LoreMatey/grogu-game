import React from 'react';
import './Navbar.css';
// import { FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItem1 = 'Reglas';
  const navItem2 = 'Fichas';
  const navItem3 = 'Juego';

  return (
    <>
      <div className='navbar'>
      <img className='navbar-logo' src='https://www.creativefabrica.com/wp-content/uploads/2021/08/20/bayoda-grogu-svg-Graphics-16076611-1-1-580x435.jpg' />
        <ul className='navbar-list'>
          <li className='navbar-item'>{navItem1}</li>
          <li className='navbar-item'>{navItem2}</li>
          <li className='navbar-item'>{navItem3}</li>
        </ul>
      </div>
    </>
  );
}


export default Navbar;