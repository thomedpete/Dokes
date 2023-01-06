import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
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
          {/* <CardContent>

            <Card sx={(theme) => ({
              bgcolor: 'primary.dark'
            })}> */}
            <article className='joke-container'>
                <img src={background} alt="background" className='joke-background' />
                <Typography m="2.55%" className='jokes' gutterBottom variant="h5" color="gainsboro" ref={el => {jokeText =el}}>
                {jokes.joke}
                </Typography>
            </article>
              <Button variant="contained" color="success" onClick={() => addJoke(jokes)}>
                Save
              </Button>
            {/* </Card>
          </CardContent> */}
        </Stack>
      {/* </Card> */}
    </div>
  );
}

export default JokeCard; 