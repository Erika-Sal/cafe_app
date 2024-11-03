import React from 'react'
import Navbar from '../components/Navbar.js'

function page() {
    return (
       <div className="">
        <Navbar />
        <img src="/spaceInvaders.png" className="header"/>
        <div className='section'>
            <iframe src="https://space-invaders-delta.vercel.app/" className='gameSquare' />
        </div>

       </div> 
    )
    
   
}

export default page