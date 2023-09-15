import React from 'react'
import './navbar.css'
import MyButton from '../Button/MyButton'

import Navbar_Logo from '../../assets/images/Navbar_Kahaani_logo.png'


const Navbar = () => {
  return (
    <div className='NavBar'>
        <img src={Navbar_Logo} alt="Navbar_Logo" className='Navbar_Logo'/>  

        <div className='Navbar-content'>
          <p>Listen to stories</p>
          
          <p>Type and Tell</p>

          <MyButton name="Contact Us"/>

          
        </div>
      
    </div>
  )
}

export default Navbar
