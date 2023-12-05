import { Link } from "react-router-dom"
import Cart from "./Cart"

export default function NavContainer ({cartItems, onUpdate, onRemove}) {

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
    <Cart cartItems={cartItems} onUpdate={onUpdate} onRemove={onRemove} />
    </div>
    </>
  )
}