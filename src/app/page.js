import Image from "next/image";
import Link from 'next/link'
import Navbar from '../app/components/Navbar.js'

export default function Home() {
  return (
   <>

    <Navbar />
    <h1 className="featured">Featured Games</h1>
    <div className="games">
      <Link href="/candyCrush"><img src="/candyCrushSquare.png" className="square"/></Link>
      <Link href="/spaceInvaders"><img src="/Variant3.png" className="square"/></Link>
      <Link href="/snake"><img src="/snakeSquare.png" className="square"/></Link>
      <Link href="/pong"><img src="/pongSquare.png" className="square"/></Link>
    </div>
   </>
  );
}
