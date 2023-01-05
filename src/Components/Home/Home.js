import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Stack } from '@mui/material';
import getAllJokes from '../../apiCalls'

import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import JokeCard from '../JokeCard/JokeCard';

const Home = ({ jokes, pocket, getJokes }) => {
    const label = { inputProps: { 'aria-label': 'Favorite button to put in pocket/saved jokes' } }

    const [checked, setChecked] = useState(false);
    const [unchecked, setUnChecked] = useState(true);
    const handleChange = (event) => {
        console.log(event)
        if(event.target.checked) {
            setChecked(!event.target.checked);
        } else {
            setChecked(event.target.checked);
        }
    };

    const storage = () => {
        console.log('pocket', pocket)
        let items = []
        items.push(pocket)
        console.log(pocket)
        localStorage.setItem('pocket', JSON.stringify(items));
    }

    const storedItems = () => {
        return JSON.parse(localStorage.getItem('pocket'));

    }

    const handleFavJoke = (event) => {
        if(event.target.checked) {
            handleChange(event);
            storage();
            
        }
    }

    const pocketItems = localStorage.getItem(pocket);

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
                <Checkbox {...label} checked={checked} onChange={handleFavJoke} icon={<FavoriteBorder />} checkedIcon={<Favorite />} ></Checkbox>
                <Button variant='contained' onClick={() => getJokes()}>New Joke</Button>
            </Stack>
        </div>
    )
}

export default Home