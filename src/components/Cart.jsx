import { useEffect, useState } from "react"
import "../styles/cart.css"

export default function Cart ({cartItems}) {

  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0);
  
  const showCartObject = () => {
    alert(`
    The following would be submit as JSON to a checkout:
    ${JSON.stringify(cartItems)}
    `)
  }
  
  if (cartItems && cartItems.length > 0) {
    useEffect(() => {
      let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
      setCartCount(totalItems);
    }, [cartItems])
  };

  const CartButton = () => {
    return (
      <div className="my-cart">
        <button onClick={() => setIsOpen(!isOpen)}>Cart</button>
        <span className="relative top-5 right-5 bg-blue-500 text-white pt-1 pr-2 pb-1 pl-2 rounded-[50%]">{cartCount}</span>
      </div>
    )
  }

  if (isOpen){
    return (
      <>
      <CartButton />
      <div className="cart-items clamp-width absolute top-20 right-0 z-20 bg-white border border-black p-4">
        <div className="text-xl"><h2>Your items:</h2></div>
        <hr></hr>
        <CartItemsList cartItems={cartItems} />
        <hr></hr>
        <button onClick={showCartObject} className="p-4 bg-blue-600 min-w-full">Check out</button>
      </div>
      </>
    )
  } else return (
    <>
      <CartButton />
    </>
  )
}

const CartItemsList = ({cartItems}) => {
  
  if (cartItems !== null){
    let subtotal = 0;
    const cartItemsList = cartItems.map((item) => {
      if (item.price && item.quantity){
        subtotal += (item.price * item.quantity );
      } else {
        subtotal = `There was an issue calculating this.`
      }
      
      return (
        <li key={item.id} className="min-w-full flex justify-between">
          <div className="left-side flex flex-nowrap items-center justify-left p-2">
          <span className="p-2">{item.title} - $&nbsp;{item.price}</span>
          </div>
          <div className="right-side p-2 flex items-center justify-center">
          <span className="relative text-center bg-green-500 text-white pl-1 pr-1 rounded-[50%] w-6 h-6">{item.quantity}
          </span>
          <span className="text-red-500 p-2">Remove</span>
          </div>
        </li>
      )  
    })

    return (
      <>
        <ul>
          {cartItemsList}
        </ul>
        <p>Subtotal is: $&nbsp;{subtotal}</p>
      </>
    )
  }
}




