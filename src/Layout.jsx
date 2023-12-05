import Cart from "./components/Cart.jsx"
import "./index.css"
import { useState } from "react";
import {Link, Outlet} from "react-router-dom";

export function Layout () {
  const [cartItems, setCartItems] = useState([])
  const updateProductQuantity = (e, productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        if (e.target.textContent === '−') {
          return { ...item, quantity: item.quantity - 1 };
        } else if (e.target.textContent === '+') {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item;
    });
  
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <Navcontainer onUpdate={updateProductQuantity} />
      <GhostNav />
      <Outlet context={[cartItems, setCartItems]}/>  
    </>
  )


  function Navcontainer ({onUpdate}) {

    return (
      <>
      <div className="flex justify-between items-center border border-black min-w-full p-4 fixed z-10 bg-white">
      <nav>
        <ul className="flex gap-8">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop Products</Link></li>
          <li><Link to="/pages/about">About Us</Link></li>
        </ul>
      </nav>
      <Cart cartItems={cartItems} onUpdate={onUpdate} />
      </div>
      </>
    )
  }


}

function GhostNav () {
  return (
    <div className="sticky-bumper"></div>
  )
}



export default Layout;