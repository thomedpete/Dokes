import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, withRouter } from 'react-router-dom';


// const options = [
//   'Home',
//   'Pocket',
//   'About',
// ];

// alt for options w/ routes
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box className='header' sx={{ flexGrow: 1 }}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', textTransform: 'uppercase' }}>
            Welcome to DOKES
          </Typography>
          <Typography component='p' sx={{ flexGrow: 1, color: 'white' }}>
            Dad Joke Generator
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header