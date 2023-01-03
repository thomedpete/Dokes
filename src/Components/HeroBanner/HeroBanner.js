import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import './HeroBanner.css'

const HeroBanner = () => {
  return (
  <div className='hero-container'>
      <Card sx={{ maxWidth: 345, backgroundColor:"green" }}>
        <CardMedia
          sx={{ height: 100 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Joke
          </Typography>
          <Typography variant="body2" color="text.secondary">
         A very funny joke 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
    
}

export default HeroBanner