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
      <Card className='hero-banner' sx={{ maxWidth: '60%', backgroundColor:"green" }}>
        <CardMedia
          sx={{ height: 100 }}
          image=""
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Banner Stuff
          </Typography>
          <Typography variant="body2" color="text.secondary">
        
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
    
}

export default HeroBanner