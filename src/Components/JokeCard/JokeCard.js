import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./JokeCard.css"
import { Stack } from '@mui/material';



const JokeCard = ({ jokes }) => {

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