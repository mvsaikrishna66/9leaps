import { render } from '@testing-library/react';
import React from 'react';
import './Header.css';

function Header() {
  
    return(
        <div class="header">
          
        <div class="header-menu">
          <div class="title">Rewards and Recognition</div>
          <button className='btn1'><i class="fas fa-bars"></i></button>
          <ul>
            <li>
              <a href="Logo"> <i class="fas fa-power-off"></i></a>
            </li>
          </ul>
        </div>
      </div>
    );
}
export default Header;