import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import "./JokeCard.css"

import { Stack } from '@mui/material';

const JokeCard = () => {
  return (
    <div className='card-container'>
      <Card sx={{ maxWidth: '60%', backgroundColor: "lightsteelblue" }}>
        {/* <CardMedia
          sx={{ height: 100 }}
          image=""
          title=""
        /> */}
        <CardContent flexGrow="1">
          <Stack
            direction="column"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Card sx={{ backgroundColor: "#1976d2"}}>
              <Typography m="2.55%" gutterBottom variant="h5" color="gainsboro">
              How do you make a tissue dance?
              </Typography>
            </Card>
            <Card sx={{ backgroundColor: "#1976d2"}}>
              <Typography m="2.5%" variant="h6" color="gainsboro">
                Put a little boogie in it! 
              </Typography>
            </Card>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default JokeCard; 