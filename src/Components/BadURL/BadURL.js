import React from 'react'
import { Link } from 'react-router-dom'
import '../About/About.css'


const BadURL = () => {
    return (
        <div className='about-container'>
            <article className='aboutUs-container'>
                <h2 className='about-dokes'>You're on the wrong page dodo!<p>Click below to go back home</p></h2>
                <Link to='/'><button>Home</button></Link>
            </article>
        </div>
    )
}

export default BadURL