import React from 'react'
import './Logo.css'
import { Link } from "react-router-dom";
function Logo() {
    return (
        <div className='logo'>
            <h1 ><Link to="/">DEVJOBS</Link></h1>
        </div>
    )
}

export default Logo
