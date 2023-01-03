import React from 'react';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import HeroBanner from '../HeroBanner/HeroBanner';
import JokeCard from '../JokeCard/JokeCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>LameWire</h1>
      <HeroBanner/>
      <JokeCard/>
      <Button variant="contained">New Joke</Button>
    </div>
  );
}

export default App;
