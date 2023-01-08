import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
// import theme from '../../theme';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';

import { gsap , Power3 } from 'gsap'

import background from '../../assets/dadJoke-background1.png'
import "./JokeCard.css"

const JokeCard = ({ jokes, addJoke }) => {
  let jokeText = useRef(null)


  const label = { inputProps: { 'aria-label': 'Favorite button to put in pocket/saved jokes' } }

  useEffect(() => {
    gsap.to(jokeText, .8, { opacity: 1, y: -5, ease: Power3.easeOut })
  }, [])

  return (
    <div className='card-container'>
      {/* <Card sx={{ maxWidth: '60%' }}> */}
        <Stack
          direction="column"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box className='box'>
            <article className='joke-container'>
                {/* <img src={background} alt="background" className='joke-background' /> */}
          <Typography m="2.55%" className='jokes' gutterBottom variant="h5" color="black"   ref={el => { jokeText = el }} 
          sx={(theme) => ({
            [theme.breakpoints.down('sm')]: {
              fontSize:'medium',
              fontWeight: 'bold',
              marginTop:'4%'
            },
            [theme.breakpoints.down('md')]: {
              fontSize: 'medium',
              fontWeight: 'bold',
              marginTop: '2%'
            }

          })}>
                {jokes.joke}
                </Typography>
            </article>
        </Box>
              <Button className='save-joke-button' variant="contained" color="success" onClick={() => addJoke(jokes)}>
                Save
              </Button>
        </Stack>
    </div>
  );
}

export default JokeCard; 