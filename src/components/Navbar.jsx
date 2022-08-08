import React from 'react';
import { AppBar, Typography, Box, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" display="flex">
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <Typography variant="h6">
          <Link to="/">Home</Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/projects">Projects</Link>
        </Typography>
      </Box>

    </AppBar>
  )
}

export default Navbar