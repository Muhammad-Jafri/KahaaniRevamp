import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import sideImg from './assets/images/side_pattern.png'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <img src={sideImg} alt="sideimg" className='leftpattern'/>
    <App />
    <img src={sideImg} alt="sideimg" className='rightpattern'/>
  </React.StrictMode>,
)
