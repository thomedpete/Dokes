import React,{ useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { gsap, timeline } from 'gsap'
// import dokes from '../../assets/dokes-title.png'
// import logo from '../../assets/DADJOKE.png'

import './Header.css'


const options = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/pocket',
        text: 'Pocket'
    },
    {
        path: '/about',
        text: 'About'
    }
];

const ITEM_HEIGHT = 48;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




  return (
    <Box className='header-container' sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.path} selected={option === 'Pyxis'} onClick={handleClose}>
                <Link to={option.path}>{option.text}</Link>
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h3" className='dokes' component="h3" sx={(theme) => ({
              typography: 'Anton, sans-serif', flexGrow: 1, color: 'black', fontStyle: 'bold'
            })} >
            dokes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header