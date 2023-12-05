import "./index.css"
import { useState } from "react";
import {Outlet} from "react-router-dom";
import NavContainer from "./components/NavContainer";

export function Layout () {
  const [cartItems, setCartItems] = useState([])
  const updateProductQuantity = (e, productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        if (e.target.textContent === '−' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else if (e.target.textContent === '+' && item.quantity < 101) {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item;
    });
  
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <NavContainer cartItems={cartItems} onUpdate={updateProductQuantity} />
      <GhostNav />
      <Outlet context={[cartItems, setCartItems]}/>  
    </>
  )


}

function GhostNav () {
  return (
    <div className="sticky-bumper"></div>
  )
}



export default Layout;