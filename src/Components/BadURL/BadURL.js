import React from 'react'
import { Link } from 'react-router-dom'



const BadURL = () => {
    return (
        <div>
            <h2>on the wrong page dodo!</h2>
            <h3>go back home</h3>
            <Link to='/'><button>home</button></Link>
        </div>
    )
}

export default BadURL