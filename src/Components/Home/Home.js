import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import { Stack } from '@mui/material';
import getAllJokes from '../../apiCalls'

import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import JokeCard from '../JokeCard/JokeCard';

const Home = ({ jokes, pocket, getJokes, addJoke }) => {

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                margin={2}
                width='100%'
                >
                <JokeCard jokes={jokes} addJoke={addJoke}/>
                <Button className='new-joke-button' variant='contained' onClick={() => getJokes()}>New Joke</Button>
            </Stack>
        </div>
    )
}

export default Home