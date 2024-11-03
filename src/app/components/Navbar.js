
import React from 'react'
import Link from 'next/link'


const Navbar = () => {

        return (
            <navbar>
            <div className="whiteSpace"> 
              <Link href="/"><img className="logo" src="/logo.png" /></Link>
              <h1>Gameboy Cafe</h1>
              <img className="search" src="/searchBar.png"/>
            </div> 
          </navbar>
        )
  
}

export default Navbar
