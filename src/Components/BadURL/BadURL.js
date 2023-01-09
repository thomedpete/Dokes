import React from 'react'
import { Link } from 'react-router-dom'
import '../About/About.css'
import Button from '@mui/material/Button'


const BadURL = () => {
    return (
        <div className='about-container'>
            <article className='aboutUs-container'>
                <h2 className='about-dokes'>You're on the wrong page dodo!<p>Click below to go back home</p></h2>
                <Link to='/'>
                    <Button variant="contained">
                        Home
                    </Button>
                </Link>
            </article>
        </div>
    )
}

export default BadURL