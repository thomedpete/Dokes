import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import HeroBanner from '../HeroBanner/HeroBanner';
import JokeCard from '../JokeCard/JokeCard';

import getAllJokes from '../../apiCalls'

import './App.css';

const App = () => {
  const [jokes, setJokes] = useState('')
  const [e, setError] = useState('')

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
  }

  useEffect(() => {
    getJokes()
  }, [])

  return (
    <div className="App">
      <Header/>
      <h1 className='page-title'>LameWire</h1>
      <HeroBanner/>
      <JokeCard jokes={jokes} />
      <Button variant="contained">New Joke</Button>
    </div>
  );
}

export default App;
