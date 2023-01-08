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

import { gsap, Power3 } from 'gsap'
import logo from '../../assets/DADJOKE.png'

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
  let titleText = useRef(null)
  let logoIcon = useRef(null)
  let tl = useRef(null)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    tl = gsap.timeline({repeat:-1,repeatDelay:2})
      tl.to(logoIcon, 0.7,{rotation:30})
      tl.to(logoIcon, 2,{rotation:0,ease: 'elastic(2, 0.1)', x: 20, repeat: -1 })
      tl.to(titleText, 10 , {opacity: 1, xPercent: 40, ease: Power3.easeOut, repeat: -1 })
  }, [])

  return (
    <Box className='header-container' sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar className='toolBar'>
          <IconButton
            aria-label="more"
            className='icon-button'
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
            className='menuButton'
            MenuListProps={{ 'aria-labelledby': 'long-button', }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
                backgroundColor: '#000000',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem id={option.text} key={option.path} selected={option === 'Pyxis'} onClick={handleClose}>
                <Link className='little-link'to={option.path}>{option.text}</Link>
              </MenuItem>
            ))}
          </Menu>
          <img src={logo} className='logo' ref={el => {logoIcon = el}}/>
          <Typography variant="h3" className='dokes' component="h3" sx={(theme) => ({
              typography: 'Anton, sans-serif', flexGrow: 1, color: 'black', fontStyle: 'bold'
            })} ref={el => {titleText = el}}>
            dokes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header