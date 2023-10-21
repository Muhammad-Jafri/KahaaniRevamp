import React from 'react';
import Homepage from './components/homepage/Homepage';
import Librarypage from './components/library/librarypage';
import Librarypage2 from './components/library2/LibraryPage2';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import Landingpage_phone from './components/homepage/Landingpage_phone';



function App() {
  return (
    <Router>

      <div className="App">

      <Routes>
        <Route exact path='/' element={< Homepage />}></Route>

        {/* <Route exact path='/library' element={< Librarypage />}></Route> */}
      
        <Route exact path='/library' element={< Librarypage2 />}></Route>

        {/* <Homepage /> */}
        {/* <Librarypage /> */}
    

      

        </Routes>
      </div>
    </Router>
  );
}

export default App;
