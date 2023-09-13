// import React from 'react'
import { useState } from 'react'
import './homepage.css'

const Homepage = () => {

  let i = 0
  const [marks, setMarks] = useState(0)
  
  return (
    
    <>
        
    <h1>my marks are {marks}</h1>
    <button onClick={() => {
      setMarks(marks + 1)
    }}>change</button>

    </>
  )
}


export default Homepage