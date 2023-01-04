import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import HeroBanner from '../HeroBanner/HeroBanner';
import JokeCard from '../JokeCard/JokeCard';
import { Stack } from '@mui/material';
import getAllJokes from '../../apiCalls'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import banner from '../../assets/banner2.png'
// import getAllJokes from '../../apiCalls'
import './App.css';

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
        <Button variant="contained" sx={{ fontSize: "150%", width: "35%", fontWeight: "bold"  }}>POOF! You're a Sandwich</Button>
      <HeroBanner/>
      <JokeCard jokes={jokes} />
        <Checkbox {...label} checked={checked} onChange={handleChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Button variant="contained">New Joke</Button>
      {/* we need to pass pocket down to Pocket, and set Pockets state to include the checked joke and any jokes that were alrady a part of that state */}
      </Stack>


    </div>
  );
}

export default App;
