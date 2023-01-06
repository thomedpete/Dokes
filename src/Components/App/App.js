import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'

import About from '../About/About';
import Header from '../Header/Header';
import HeroBanner from '../HeroBanner/HeroBanner';

import JokeCard from '../JokeCard/JokeCard';
import { Stack } from '@mui/material';
import getAllJokes from '../../apiCalls'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// import banner from '../../assets/banner2.png'
import theme from '../../theme';
import Pocket from '../Pocket/Pocket'
import Home from '../Home/Home'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import banner from '../../assets/DADJOKE.png'
import './App.css';

const Copyright = () => {
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

const App = () => {

  const [jokes, setJokes] = useState({})
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
    setJokes(result.data);
  }
  useEffect(() => {
    getJokes()
  }, [])

  const addJoke = (joke) => {
    console.log('joke', joke)
    console.log('pocket', pocket)
    if(!pocket.some(item => item.id === joke.id))
    setPocket([...pocket, joke]);
  }

  const deleteJoke = (event, joke) => {
    const deletion = pocket.filter(item => item.id !== event.id)
    setPocket([...deletion])
  }

  return (
    <ThemeProvider theme={theme}> 
        <div className="App">
          <Header />
          <img src={banner} className='banner' />
            <HeroBanner/>
            <Routes>
              <Route path='/' element={(<Home jokes={jokes} getJokes={getJokes} addJoke={addJoke}/>)} />
              <Route path="/pocket" element={(<Pocket pocket={pocket} deleteJoke={deleteJoke}/>)} />
              <Route path="/about" element={(<About/>)} />
            </Routes>
        </div>

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
    </ThemeProvider>
  );
}

export default App;
