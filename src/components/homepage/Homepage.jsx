// import React from 'react'
// import { useState } from 'react'
import Navbar from '../../common/navbar/Navbar'
import MyButton from '../../common/Button/MyButton'
import HP_Image from "../../assets/images/homepage_img.png";
import './homepage.css'
import Footer from '../../common/footer/footer';


const Homepage = () => {

  // let i = 0
  // const [marks, setMarks] = useState(0)
  
  return (
    <>

<Navbar /> 


<div className="HP-mainbox">
  
  <div className='HP-contentBox'>
    <div className="HP-titleBox">
      <p>Welcome to Kahaani (کہانی)!</p>
    </div>
    
    <div className="HP-text">
      <p>
        Kahaani is an online platform to help users learn Urdu through{" "}
        <span style={{ color: "#D303CE" }}>listening</span> activities.
      </p>
      <p>We provide a rich digital library of popular Urdu short stories as audiobooks and a playground where students can tell Kahaani what to say!</p>
    </div>

    <br></br>
    <MyButton name="Learn More About Kahaani"/>
  </div>

  <div className="HP-imgbox">
    <img src={HP_Image} alt="My Image" className='HP_Img'/>
  </div>

</div>



<Footer />


    </>
      
  )
}


export default Homepage