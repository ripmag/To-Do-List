import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import { AlertState } from './context/alert/AlertState';
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Alert />
          <Routes>
            <Route path={'/'} element={<Home />} exact />
            <Route path={'/about'} element={<About />} exact />
          </Routes>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
