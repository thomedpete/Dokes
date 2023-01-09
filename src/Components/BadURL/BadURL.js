import React from 'react'
import { Link } from 'react-router-dom'
import '../About/About.css'


const BadURL = () => {
    return (
        <div className='about-container'>
            <article className='aboutUs-container'>
                <h2 className='about-dokes'>on the wrong page dodo!</h2>
                <h3 className='about-dokes'>go back home</h3>
                <Link to='/'><button>home</button></Link>
            </article>
        </div>
    )
}

export default BadURL