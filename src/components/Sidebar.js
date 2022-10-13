import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='aside set'>
        <div className="menu">
        <ul>
        <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/work">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar