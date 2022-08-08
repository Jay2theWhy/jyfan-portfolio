import React from 'react'
import { Navbar, Homepage } from './components';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="navbar">
          <Navbar />
      </div>
      <div className="main">
        <Container>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage/>} />
            </Routes>
          </div>
        </Container>
      </div>
      <div className="footer">
        Footer stuff
      </div>
    </div>
  );
}

export default App;
