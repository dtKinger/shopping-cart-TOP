import "./index.css"

// import { useState } from 'react'
import {Link, Outlet} from "react-router-dom";

export function Layout () {
  // const [cartItems, setCartItems] = useState({})

  return (
    <>
      <Navcontainer />
      <GhostNav />
      <Outlet />  
    </>
  )

}

function GhostNav () {
  return (
    <div className="sticky-bumper"></div>
  )
}

function Navcontainer () {

  return (
    <>
    <div className="
      flex
      justify-between
      border
      border-black
      min-w-full
      p-4
      fixed
      z-10
      bg-white"
    >
    <nav>
      <ul className="
        flex
        gap-2"
      >
        <li><Link to="/shop">Shop Products</Link></li>
        <li>Hello</li>
        <li>Goodbye</li>
        <li>How Are</li>
        <li>You?</li>
      </ul>
    </nav>
    <div>
      <Cart  />
    </div>
    </div>
    </>
  )
}


function Cart () {
  
  return(
    <>
    &nbsp;Cart
    <aside className="flex-column">
      <ul className='flex-column'>
        {}
      </ul>
    </aside>
    </>
  )
}


export default Layout;