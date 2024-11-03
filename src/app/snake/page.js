import React from 'react'
import Navbar from '../components/Navbar.js'

function page() {
    return (
       <div >
        <Navbar />
        <img src="/snakeHeader.png" className="snakeHeader"/>

        <div className='section'>
            <iframe src="https://snake-five-red.vercel.app/" className="gameSquare" />
        </div>

       </div> 
    )
    
   
}

export default page