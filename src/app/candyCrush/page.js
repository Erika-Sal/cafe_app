import React from 'react'
import Navbar from '../components/Navbar.js'
import '../candy.css'


function page() {
    return (
       <div className="candyCrushBody">
        <Navbar />
        <img src="/candyCrushHeader.png" className="header"/>

        <div className='section'>
             <iframe src="https://candy-crush-ivory.vercel.app/" className="gameSquare"/>
        </div>
       

       </div> 
    )
    
   
}

export default page