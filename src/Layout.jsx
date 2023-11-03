// import { useState } from 'react'
import {Link} from "react-router-dom";

export function Layout () {
  // const [cartItems, setCartItems] = useState({})

  return (
    <>
    <div className="
      my-nav
      flex
      space-between
      items-center">
    <Navcontainer />
    </div>
    </>
  )

}

function Navcontainer () {

  return (
    
    <div className="
      flex
      justify-between
      border
      border-black
      min-w-full
      min-h-full
      p-4"
    >
    <nav>
      <ul className="
        flex
        gap-2"
      >
        <li><Link to="/pages/about">About</Link></li>
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