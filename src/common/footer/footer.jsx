import React from 'react';
import './Footer.css'; // Make sure to import your CSS file

import {AiOutlineMail} from 'react-icons/ai'
import {IoCallOutline} from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-content'>
            {<IoCallOutline style={{ fontSize: '24px' }} className='Footer-icon' />} 
          <p><strong>00-111-234321 &emsp;&emsp; 
            {<AiOutlineMail style={{ fontSize: '24px' }} className='Footer-icon' />} 
            &ensp;kahaani@lums.edu.pk</strong></p>
          &emsp;&emsp;&emsp;
          
          <p>Copyright © 2023 Kahaani</p>
        </div>     

    </div>
  );
}

export default Footer;