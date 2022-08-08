import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Typography>
        Hello
        <Link to="/">Home</Link>
      </Typography>
      
    </AppBar>
  )
}

export default Navbar