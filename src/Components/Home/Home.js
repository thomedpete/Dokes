import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import React, {  useRef } from 'react'
import JokeCard from '../JokeCard/JokeCard';

const Home = ({ jokes, getJokes, addJoke }) => {
    let newJokeBtn = useRef(null)
    let tl = useRef(null)

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
Home.propTypes = {
    jokes: PropTypes.object,
    getJokes: PropTypes.func,
    addJoke: PropTypes.func
}