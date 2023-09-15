import React from 'react'
import Button from '@mui/material/Button';
import './MyButton.css'


const MyButton = ({name}) => {
  
    return (
        <Button variant="contained" className='Contact-Button'>
              {name}
          </Button>
    )
}

export default MyButton
