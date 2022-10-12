import React from 'react';
import "./header.css";
const Header = () => {
  return (
    <div className='max-width header'>
      <img src="Logo.png" alt="Yippy-logo" className='header-logo' />
      <div className='header-right'>
        <div className="header-location">
          <div className="location-wrapper">
            <div className="location-icon">
            <span className="material-symbols-outlined absolute-center">location_on</span>
            <div>Delhi</div>
            </div>
            <span class="material-symbols-outlined absolute-center">arrow_drop_down</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
