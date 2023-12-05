import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import allProducts from "../data/products.json";

export default function QuantityPicker ({productId}) {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useOutletContext();

  const handleAddToCart = () => {
    
    // Get the product that was clicked Add to Cart
    let stagedProduct = allProducts.filter((item => item.id == productId))[0];
    // a big safety check before doing a lot of things
    if (stagedProduct) {
      // Create a staging product with Quantity property to prepare for the Cart add.
      stagedProduct = {
        ...stagedProduct,
        "quantity": quantity // Add the quantity property to the product
      };

      // Check how we're going to handle the stagedProduct
      // If that productId is NOT already in the cart
      const isInCart = (item) => item.id == productId
      if (!cartItems.some(isInCart)){
      // Add the stagedProduct to the Cart (cartItems state)
      setCartItems((prev) => [
        ...prev,
        stagedProduct,
      ]);
    } else if (cartItems.some(isInCart)){
      // Compare stagedProduct to the cartItems. Find the match then sum it's quantity

    }

    };

      // // If that productId is ALREADY in the cart
      // } else if (cartItems.some(isInCart)){

      // }

    // If that productId is already in cart
    // if (){
      // Add the quantities together

    // }
  }

  return (
  <div className="quantity-picker gap-4 items-center max-h-[40px] flex justify-between">
    
    <div className="right flex gap-2">
      <button className="pt-0 pr-2 pb-0 pl-2 border border-black" onClick={() => {
        if (quantity > 1) {
          setQuantity(quantity - 1)
        }}}>
          &minus;
      </button>
      <input className="max-w-[3rem] text-center border border-black rounded-[50%]" type="text" value={quantity} onChange={(e) => setQuantity((e.target.value))}/>
      <button className="pt-0 pr-2 pb-0 pl-2 border border-black" onClick={() => {
        if (quantity < 101){
          setQuantity(quantity + 1)
        }    
        }}>
          +
        </button>
    </div>
    <div className="left flex max-max"><button className="pt-2 pr-4 pb-2 pl-4 border border-black" onClick={handleAddToCart}>Add to Cart</button></div>
  </div>
  )
}
