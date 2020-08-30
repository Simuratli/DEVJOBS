import React from 'react'
import './404.css'
function Empty() {
    return (
       <>
       <h1 className='notfound'>404 NOT FOUND</h1>
        <div className='emp'>
            <img src={require('../../assets/images/404.gif')} alt="404"/>
        </div>
       </>
    )
}

export default Empty
