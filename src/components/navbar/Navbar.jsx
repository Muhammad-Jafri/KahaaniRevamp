import React from 'react'
import './navbar.css'

import Navbar_Logo from '../../assets/Navbar_Kahaani_logo.png'


const Navbar = () => {
  return (
    <div className='NavBar'>
        <img src={Navbar_Logo} alt="Navbar_Logo" className='Navbar_Logo'/>  

        <div className='Navbar-content'>
          <p>Listen to stories</p>
          
          <p>Type and Tell</p>

          <div className='Contact-Button'>
              Contact Us
          </div>
        </div>
      
    </div>
  )
}

export default Navbar
