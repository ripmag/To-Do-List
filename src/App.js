import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path={'/'} element={<Home/>} exact/>
        <Route path={'/about'} exact element={<About/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
