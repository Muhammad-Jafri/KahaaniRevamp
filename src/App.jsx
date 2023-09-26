import React from 'react';
import Homepage from './components/homepage/Homepage';
import Librarypage from './components/library/librarypage';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <Router>

      <div className="App">

      <Routes>
        <Route exact path='/' element={< Homepage />}></Route>
        <Route exact path='/library' element={< Librarypage />}></Route>
        {/* <Homepage /> */}
        {/* <Librarypage /> */}
    

      

        </Routes>
      </div>
    </Router>
  );
}

export default App;
