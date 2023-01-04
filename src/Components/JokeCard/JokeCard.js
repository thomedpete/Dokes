import React, { useRef, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import { TweenMax, Power3 } from 'gsap'

import "./JokeCard.css"

const JokeCard = ({ jokes }) => {
  let jokeText = useRef(null)

  useEffect(() => {
    TweenMax.to(jokeText, .8, { opacity: 1, y: -20, ease: Power3.easeOut })
  }, [])

  return (
    <div className='card-container'>
      <Card sx={{ maxWidth: '60%', backgroundColor: "lightsteelblue" }}>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <CardContent>
            <Card sx={{ backgroundColor: "#1976d2" }}>
              <Typography m="2.55%" gutterBottom variant="h5" color="gainsboro" ref={el => {jokeText = el}}>
                {jokes}
              </Typography>
            </Card>
          </CardContent>
        </Stack>
      </Card>
    </div>
  );
}

export default JokeCard; 