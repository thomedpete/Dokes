import * as React from 'react';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';


import '../About/About.css'

const Whoopsie = () => {
    return (
      <div className='about-container'>
          <h2 className='aboutUs-title'>Oh No!</h2>
          <article className='aboutUs-container'>
            <p className='about-us'>
              You don't have any jokes in your pocket yet... <Link color="#9966cc" href="/">SAVE SOME</Link>>!
            </p>
          </article>
        </div>
    )
  }


export default Whoopsie;