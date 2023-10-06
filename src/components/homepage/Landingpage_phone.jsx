import React from 'react'
import HeadphoneImage from "../../assets/images/homepage_img.png"
import KahaaniLogo from "../../assets/images/Navbar_Kahaani_logo.png"
import MyButton from '../../common/Button/MyButton'
import './Landingpage_phone.css'
import Navbar_phone from "../../common/navbar/navbar_phone"

const Landingpage_phone = () => {
  return (
    <>
    <Navbar_phone/>
    <div className="LP-phone-mainbox">

        <div className="LP-phone-imgbox-one">
            <img src={HeadphoneImage} alt="headphonesss" className='LP-phone-img'/>
        </div>
        
        <div className="LP-phone-imgbox-two">
            <img src={KahaaniLogo} alt="kahaani logo" className='LP-phone-img'/>
        </div>


        <div className='LP-phone-button'>
            <MyButton name="Learn More"/>

        </div>
        
        
        
    </div>
    
    </>


  )
}

export default Landingpage_phone