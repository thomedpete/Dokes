import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';

import { gsap, Power3 } from 'gsap'
import { RoughEase } from "gsap/EasePack"
import "./JokeCard.css"

const JokeCard = ({ jokes, addJoke }) => {
  gsap.registerPlugin(RoughEase)
  let jokeText = useRef(null)
  let boxBackground = useRef(null)
  let tl = useRef(null)


  const label = { inputProps: { 'aria-label': 'Favorite button to put in pocket/saved jokes' } }

  useEffect(() => {
    tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
    tl.to(jokeText, .8, { opacity: 1, y: -5, ease: Power3.easeOut })
    tl.to(boxBackground, 2, { rotation: 0, ease: 'elastic(2, 0.1)', x: 20, repeat: -1, repeatDelay: 2 })
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
        <Box className='box' ref={el => { boxBackground = el }}>
          <article className='joke-container'>
            <Typography m="2.55%" className='jokes' gutterBottom variant="h5" color="black" ref={el => { jokeText = el }}
              sx={(theme) => ({
                [theme.breakpoints.down('sm')]: {
                  fontSize: 'medium',
                  fontWeight: 'bold',
                  marginTop: '4%'
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
        <Button className='new-joke-button' variant="contained" color="success" onClick={() => addJoke(jokes)}>
          Save
        </Button>
      </Stack>
    </div>
  );
}

export default JokeCard; 