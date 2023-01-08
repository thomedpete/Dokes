import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { gsap, Power3 } from 'gsap'
import { RoughEase } from "gsap/EasePack"
import "./JokeCard.css"

const JokeCard = ({ jokes, addJoke }) => {
  gsap.registerPlugin(RoughEase)
  let jokeText = useRef(null)
  let boxBackground = useRef(null)
  let tl = useRef(null)


  useEffect(() => {
    tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
    tl.to(jokeText, .8, { opacity: 1, y: -5, ease: Power3.easeOut })
    tl.to(boxBackground, 2, { rotation: 0, ease: 'elastic(2, 0.1)', x: 20, repeat: -1, repeatDelay: 2 })
  }, [])

  
  return (
    <div className='card-container'>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box className='box' sx={(theme) => ({
          [theme.breakpoints.down('sm')]: {
            marginRight:'15%'
          },
          [theme.breakpoints.down('md')]: {
            marginRight: '15%'
          }
        
        })} ref={el => { boxBackground = el }}>
          <article className='joke-container'>
            <Typography m="2.55%" className='jokes'  variant="h5" color="black" ref={el => { jokeText = el }}
              sx={(theme) => ({
                display:'flex',
                flexWrap:'wrap',
                width:'70%',
           
                [theme.breakpoints.down('sm')]: {
                  fontSize: 'medium',
                  fontWeight: 'bold',
                  marginTop: '5%'
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: 'larger',
                  fontWeight: 'bold',
                  marginTop: '4%',
                  marginLeft: '10%'
                },
                [theme.breakpoints.down('md')]: {
                  fontSize: 'small',
                  fontWeight: 'bold',
                  marginTop: '10%',
                  marginLeft:"5%"
                },
                [theme.breakpoints.up('lg')]: {
                  marginLeft:'24%',
                  width:'35%',
                  marginTop:'-1%'
                }
              })}>
              {jokes.joke}
            </Typography>
          </article>
        </Box>
        <Button className='save-joke-button' variant="contained" color="success" onClick={() => addJoke(jokes)}>
          Save to Pocket
        </Button>
      </Stack>
    </div>
  );
}

export default JokeCard; 
JokeCard.propTypes = {
  jokes: PropTypes.object,
  addJoke: PropTypes.func
}