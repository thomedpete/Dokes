import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Stack } from '@mui/material';

import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import JokeCard from '../JokeCard/JokeCard';

const Home = ({ jokes }) => {
    const label = { inputProps: { 'aria-label': 'Favorite button to put in pocket/saved jokes' } }

    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                margin={2}
                >
                <JokeCard jokes={jokes} />
                <Checkbox {...label} checked={checked} onChange={handleChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Button variant='contained' onClick={() => window.location.reload(false)}>New Joke</Button>
            </Stack>
        </div>
    )
}

export default Home