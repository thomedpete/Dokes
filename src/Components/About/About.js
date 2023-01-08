import * as React from 'react';
import { Typography } from '@mui/material';

import './About.css'

const About = () => {
    return (
      <div className='about-container'>
          <h2 className='aboutUs-title'>About Us!</h2>
          <article className='aboutUs-container'>
            <p className='about-us'>
              Welcome to our dad joke application! We are a team of three software developers who are passionate about bringing joy and laughter to people's lives through the power of dad jokes. Our goal is to create a platform that not only delivers a never-ending supply of terrible jokes, but also allows users to contribute their own jokes and vote on their favorites. Whether you're a fan of classic groaners or you have a knack for crafting your own terrible puns, there's something for everyone in our dad joke application. So come on in and join the fun!
            </p>
          </article>
        </div>
    )
  }


export default About;