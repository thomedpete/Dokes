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


const JokeCard = ({ jokes }) => {

  return (
    <div className='card-container'>

      <Card sx={{ maxWidth: '60%', backgroundColor: "lightsteelblue" }}>
        {/* <CardMedia

          sx={{ height: 100 }}
          image=""
          title=""

        />
        

        /> */}

        <Stack
          direction="column"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <CardContent flexGrow="1">
     

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