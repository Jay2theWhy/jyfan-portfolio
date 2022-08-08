import React from 'react'
import { Navbar, Homepage, Projects } from './components';
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
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </Container>
      </div>
      <div className="footer">
        <Typography variant="h4">Footer stuff</Typography>
      </div>
    </div>
  );
}

export default App;
