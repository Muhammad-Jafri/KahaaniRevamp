import React from 'react'
import './navbar.css'
import MyButton from '../Button/MyButton'

import Navbar_Logo from '../../assets/images/Navbar_Kahaani_logo.png'


const Navbar = () => {
  return (
    <div className='NavBar'>

        <a href="/">
          <img src={Navbar_Logo} alt="Navbar_Logo"  className='Navbar_Logo' />
        </a>
  

        <div className='Navbar-content'>
          <p>Listen to Stories</p>
          
          <p>Give Feedback</p>

          <MyButton name="Contact Us"/>

          
        </div>
      
    </div>
  )
}

export default Navbar
