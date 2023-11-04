import { useState } from "react"

export default function Cart ({cartItems}) {

  const [isOpen, setIsOpen] = useState(false)
  // Show this as an after element?
  let cartCount = cartItems.length;

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
      <div className="cart-items absolute top-20 right-0 z-20 bg-white border border-black p-4 min-w-[300px]">
        <div className="text-xl"><h2>Your items:</h2></div>
        <CartItemsList cartItems={cartItems} />
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
      subtotal += item.price;
      return (
        <li key={item.id}>{item.title} - $&nbsp;{item.price}</li>
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




