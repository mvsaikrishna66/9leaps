import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return(
      
        <div class="sidebar">
        
          <center class="profile">
            <img alt='profile pic' src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
            <p>Your Name</p>
          </center>
          <li class="item">
            <a href="#" class="menu-btn">
              <i class="fas fa-desktop"></i><span>Wall Of Fame</span>
            </a>
          </li>
          <li class="item" id="profile">
            <a href="#profile" class="menu-btn">
              <i class="fas fa-user"></i><span>Profile</span>
            </a>
          </li>

          <li class="item" id="setting">
            <a href="#setting" class="menu-btn">
              <i class="fas fa-cog"></i
              ><span>Setting<i class="fas fa-chevron-down drop-down"></i></span>
            </a>
            <div class="sub-menu">
              <a href="#"><i class="fas fa-lock"></i> <span>Password</span></a>
            </div>
          </li>
          <li class="item">
            <a href="#" class="menu-btn">
              <i class="fas fa-info-circle"></i><span>About</span>
            </a>
          </li>
      </div>
    );
    
}

export default Sidebar;