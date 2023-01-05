import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./JokeCard.css"
import { Stack } from '@mui/material';
import theme from '../../theme';



const JokeCard = ({ jokes }) => {

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