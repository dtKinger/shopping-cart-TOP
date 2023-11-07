import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import allProducts from "../data/products.json";

export default function QuantityPicker ({productId}) {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useOutletContext();

  const handleAddToCart = () => {

    // If that productId isn't already in the cart
    // If that quantity > 0
    const stagedToAdd = allProducts.filter((item => item.id == productId))
    
    setCartItems((prev) => [
      ...prev,
      stagedToAdd[0],
    ])
    console.log(cartItems)
  }

  return (
  <div className="quantity-picker gap-4 items-center max-h-[40px] flex justify-between">
    
    <div className="right flex gap-2">
      <button className="pt-0 pr-2 pb-0 pl-2 border border-black" onClick={() => {
        if (quantity < 101){
          setQuantity(quantity + 1)
        }    
        }}>
          +
        </button>
      <input className="max-w-[3rem] text-center border border-black rounded-[50%]" type="text" value={quantity} onChange={(e) => setQuantity((e.target.value))}/>
      <button className="pt-0 pr-2 pb-0 pl-2 border border-black" onClick={() => {
        if (quantity > 0) {
          setQuantity(quantity - 1)
        }}}>
          &minus;
      </button>
    </div>
    <div className="left flex max-max"><button className="pt-2 pr-4 pb-2 pl-4 border border-black" onClick={handleAddToCart}>Add to Cart</button></div>
  </div>
  )
}
