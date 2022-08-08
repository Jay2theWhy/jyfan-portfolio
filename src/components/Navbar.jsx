import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Typography variant="h5">
        <Link to="/">Home</Link>
      </Typography>
      <Typography variant="h5">
        <Link to="/projects">Projects</Link>
      </Typography>
      
    </AppBar>
  )
}

export default Navbar