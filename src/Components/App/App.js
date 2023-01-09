import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import About from '../About/About';
import Header from '../Header/Header';
import Home from '../Home/Home'
import BadURL from '../BadURL/BadURL'
import theme from '../../theme';
import Pocket from '../Pocket/Pocket'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {  ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './App.css';

const Copyright = () => {
  return (
    <Typography variant="body2" color="#FFCB5F" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/thomedpete/Dokes">
        Dokes
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
          {e && e}
            <Routes>
              <Route path='/' element={(<Home jokes={jokes} getJokes={getJokes} addJoke={addJoke}/>)} />
              <Route path="/pocket" element={(<Pocket pocket={pocket} deleteJoke={deleteJoke}/>)} />
              <Route path="/about" element={(<About/>)} />
              <Route path='*' element={(<BadURL />)} />
            </Routes>
        </div>

      <Box sx={{ bgcolor: '#000', p: 2, color: '#FFCB5F'}} component="footer">
        <Copyright />
        <Typography
          variant="subtitle1"
          align="center"
          color="#FFCB5F"
          component="p"
        >
          Dad Joke Generator by T.I.M.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
