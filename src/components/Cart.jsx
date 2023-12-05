import { useEffect, useState } from "react"
import "../styles/cart.css"

export default function Cart ({cartItems, onUpdate}) {

  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(totalItems);
  }, [cartItems])
  
  const showCartObject = () => {
    alert(`
    The following would be submit as JSON to a checkout:
    ${JSON.stringify(cartItems)}
    `)
  }
  
  const toggleCart = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <div className="my-cart">
        <button onClick={toggleCart}>Cart</button>
        <span className="relative top-5 right-5 bg-blue-500 text-white pt-1 pr-2 pb-1 pl-2 rounded-[50%]">
          {cartCount}
        </span>
      </div>
      {isOpen && (
        <div className="cart-items clamp-width absolute top-20 right-0 z-20 bg-white border border-black p-4">
          <div className="text-xl">
            <h2>Your items:</h2>
          </div>
          <hr></hr>
          <CartItemsList cartItems={cartItems} onUpdate={onUpdate} />
          <hr></hr>
          <button onClick={showCartObject} className="p-4 bg-blue-600 min-w-full">
            Check out
          </button>
        </div>
      )}
    </div>
  );
}

const CartItemsList = ({cartItems, onUpdate}) => {
  
  if (cartItems !== null){
    let subtotal = 0;
    const cartItemsList = cartItems.map((item) => {
      if (item.price && item.quantity){
        subtotal += (item.price * item.quantity );
      } else {
        subtotal = `There was an issue calculating this.`
      }
      
      return (
        <div key={item.id}>
        <li className="min-w-full flex justify-between">
          <div className="left-side flex items-center justify-left p-2">
          <span className="p-2">{item.title} - $&nbsp;{item.price * item.quantity}</span>
          </div>
          <div className="right-side min-w-max p-2 flex items-center justify-center">
            <div className="in-cart-quantities">
              <button onClick={(e) => onUpdate(e, item.id)} className="adjustment-btn decrement py-0 px-2">&minus;</button>
              <span className="relative mx-2 text-center bg-green-500 text-white rounded-[50%] inline-block h-[24px] w-[24px]">
                {item.quantity}
              </span>
              <button onClick={(e) => onUpdate(e, item.id)} className="adjustment-btn increment py-0 px-2">+</button>
              <span className="text-red-500 p-2">Remove</span>
            </div>
          </div>
        </li>
        <hr className="cart-list-hr"></hr>
        </div>
      )  
    })

    return (
      <>
        <ul>
          {cartItemsList}
        </ul>
        <hr className="p-4"></hr>
        <p className="font-bold">Subtotal is: $&nbsp;{subtotal}</p>
        <hr className="p-4"></hr>
      </>
    )
  }
}




