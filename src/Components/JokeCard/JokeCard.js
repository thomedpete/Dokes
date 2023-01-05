import React, { useRef, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import theme from '../../theme';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


import { TweenMax, Power3 } from 'gsap'

import "./JokeCard.css"

const JokeCard = ({ jokes }) => {
  let jokeText = useRef(null)
    const label = { inputProps: { 'aria-label': 'Favorite button to put in pocket/saved jokes' } }


  useEffect(() => {
    TweenMax.to(jokeText, .8, { opacity: 1, y: -10, ease: Power3.easeOut })
  }, [])

  const handleChange = (id) => {
    console.log(id)
  }

  return (
    <div className='card-container'>
      <Card sx={{ maxWidth: '60%' }}>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <CardContent>

            <Card sx={(theme) => ({
              bgcolor: 'primary.dark'
            })}>
              <Typography m="2.55%" gutterBottom variant="h5" color="gainsboro">

                {jokes.joke}
              </Typography>
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite id={jokes.id}/>} >{console.log(jokes.id)}</Checkbox>
            </Card>
          </CardContent>
        </Stack>
      </Card>
    </div>
  );
}

export default JokeCard; 