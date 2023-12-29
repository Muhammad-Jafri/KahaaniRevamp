import React from 'react'
import Button from '@mui/material/Button';
import './MyButton.css'


const MyButton = ({name, onClick}) => {
  
    return (
        <Button style={{textTransform : 'none'}} variant="contained" className='Contact-Button' onClick={onClick}>
            {name}
        </Button>
    )
}

export default MyButton
