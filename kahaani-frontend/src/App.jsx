import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {homepage} from './components/homepage/homepage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
        <homepage />
      
    </>
  )
}

export default App
