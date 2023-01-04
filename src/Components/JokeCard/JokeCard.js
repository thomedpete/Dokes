import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import "./JokeCard.css"
import { Stack } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Favorite button to put in pocket/saved jokes' } }


const JokeCard = ({ jokes }) => {
  const [checked, setChecked] = React.useState(true);
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className='card-container'>

      <Card sx={{ maxWidth: '60%', backgroundColor: "lightsteelblue" }}>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <CardContent flexGrow="1">
            <Card sx={{ backgroundColor: "#1976d2" }}>
              <Checkbox {...label} checked={checked} onChange={handleChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
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