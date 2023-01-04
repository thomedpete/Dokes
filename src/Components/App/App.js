import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import HeroBanner from '../HeroBanner/HeroBanner';
import JokeCard from '../JokeCard/JokeCard';
import Pocket from '../Pocket/Pocket'
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import getAllJokes from '../../apiCalls'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import banner from '../../assets/banner2.png'
// import getAllJokes from '../../apiCalls'
import './App.css';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


const label = { inputProps: { 'aria-label': 'Favorite button to put in pocket/saved jokes' } }

const App = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [jokes, setJokes] = useState('')
  const [e, setError] = useState('')
  const [pocket, setPocket] = useState([])

  const getJokes = async () => {
    let url = "https://icanhazdadjoke.com/";
    let result = null;
    try {
      result = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
    } catch (e) {
      setError(e)
      console.log(e);
    }
    setJokes(result.data.joke);
    setPocket(result.data);
  }
  useEffect(() => {
    getJokes()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="App">
          <Header />
          <img src={banner} className='banner' />
          <Stack
            direction="column"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            margin={2}
          >
          
          {/* <Button variant="contained" sx={{ fontSize: "150%", width: "35%", fontWeight: "bold"  }}>POOF! You're a Sandwich</Button>
          <HeroBanner/>
          Route 1
          <JokeCard jokes={jokes} />
            <Checkbox {...label} checked={checked} onChange={handleChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button variant="contained">New Joke</Button> */}
              {/* we need to pass pocket down to Pocket, and set Pockets state to include the checked joke and any jokes that were alrady a part of that state */}
          {/* Route 2 */}
          <Pocket/>
          </Stack>
        </div>
        {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App;
