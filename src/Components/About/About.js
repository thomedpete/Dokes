import * as React from 'react';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import './About.css'

const About = () => {
    return (
      <div className='about-container'>
          <h2 className='aboutUs-title'>About Dokes</h2>
          <article className='aboutUs-container'>
            <h3 className='aboutUs-title'>Dad Jokes on Demand</h3>
            <p className='about-dokes'>
              Welcome to our dad joke application, DOKES! We are a team of three software developers who are passionate about bringing joy and laughter to people's lives through the power of dad jokes. Our goal is to create a platform that not only delivers a never-ending supply of terrible jokes, but also (planned future extensions) allows users to contribute their own jokes and vote on their favorites. Whether you're a fan of classic groaners or you have a knack for crafting your own terrible puns, there's something for everyone in our dad joke application. So come on in and join the fun!
            </p>
            <p className='about-us'>
              T.I.M. is the dev team of T -
              <Link className='thomas' color="#9966cc" href="https://github.com/thomedpete" underline="none"> Thomas</Link>
              <Link className='peterson' color="#9966cc" href="https://www.linkedin.com/in/thomas-peterson-web-dev/" underline="none"> Peterson</Link>, I -
              <Link color="#9966cc" href="https://github.com/grainymac" underline="none"> Ian</Link> 
              <Link color="#9966cc" href="https://www.linkedin.com/in/ianmac87/" underline="none"> McIntosh</Link> and M -
              <Link color="#9966cc" href="https://github.com/MattWalterTX" underline="none"> Matt</Link>
              <Link color="#9966cc" href="https://www.linkedin.com/in/matt-walter-67b810246/" underline="none"> Walter</Link>

              . Feel free to explore our Github (first name) and LinkedIn (last name) via these links!
            </p>
          </article>
        </div>
    )
  }


export default About;