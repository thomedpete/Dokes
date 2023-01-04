import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import "./JokeCard.css"

const JokeCard = ({ jokes }) => {
  return (
    <div className='card-container'>
      <Card className='joke-card' sx={{ maxWidth: '60%', backgroundColor: "blue" }}>
        <CardMedia
          sx={{ height: 100 }}
          image=""
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {jokes}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default JokeCard; 