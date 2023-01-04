import React from 'react';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import HeroBanner from '../HeroBanner/HeroBanner';
import JokeCard from '../JokeCard/JokeCard';
import './App.css';

import { Stack } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Header/>
       <Stack
        direction="column"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        margin={2}
      >
        <Button variant="contained" sx={{ fontSize: "150%", width: "35%", fontWeight: "bold"  }}>POOF! You're a Sandwich</Button>
        <HeroBanner/>
        <JokeCard/>
        <Button variant="contained">New Joke</Button>
      </Stack>
    </div>
  );
}

export default App;
