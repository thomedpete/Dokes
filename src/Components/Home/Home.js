import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import { Stack } from '@mui/material';
import getAllJokes from '../../apiCalls'

import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import { gsap, Bounce } from 'gsap'

import JokeCard from '../JokeCard/JokeCard';

const Home = ({ jokes, pocket, getJokes, addJoke }) => {
    let newJokeBtn = useRef(null)
    let tl = useRef(null)

    useEffect(() => {
        // tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
        //     tl.to(newJokeBtn, 2, { ease: Bounce.easeOut, y: 20 })
    }, [])

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
                <Button className='new-joke-button' variant='contained' ref={el => {newJokeBtn = el}} onClick={() => getJokes()}>New Joke</Button>

            </Stack>
        </div>
    )
}

export default Home