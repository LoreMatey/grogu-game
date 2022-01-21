import './Navbar.css';
import { FaDiceFive } from 'react-icons/fa';
import { FaReadme } from 'react-icons/fa';
import { FaChess } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItem1 = 'Reglas';
  const navItem2 = 'Fichas';
  const navItem3 = 'Juego';

  return (
    <>
      <div className='navbar'>
        <ul className='navbar-list'>
          <NavLink to='/'>
            <img className='navbar-logo' src='https://www.creativefabrica.com/wp-content/uploads/2021/08/20/bayoda-grogu-svg-Graphics-16076611-1-1-580x435.jpg' />
          </NavLink>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to='/rules'>
              <FaReadme className='navbar-icon'/>
              {navItem1}
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to='/pieces'>
              <FaChess className='navbar-icon chess'/>
              {navItem2}
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to='/game'>
              <FaDiceFive className='navbar-icon dice'/>
              {navItem3}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}


export default Navbar;