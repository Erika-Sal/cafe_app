import React from 'react'
import Navbar from '../components/Navbar.js'

function page() {
    return (
       <div >
        <Navbar />
        <img src="/pongHeader.png" className="header"/>

        <div className='section'>
            <iframe src="https://pong-seven-mu.vercel.app/" className="gameSquare" />
        </div>

       </div> 
    )
    
   
}

export default page