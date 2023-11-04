import allProducts from "../data/products.json";
import "../index.css";
import { useState } from "react";

export default function ProductList() {
  const [loadedImages, setLoadedImages] = useState([]);

  function handleLoadedImg(itemId) {
    setLoadedImages((prevLoadedImages) => [
      ...prevLoadedImages,
      itemId
    ]);
  }

  const productList = allProducts.map((item) => {
    
    const isLoaded = loadedImages.includes(item.id);

    return (
      <li
        key={item.id}
        className="flex-col gap-40 text-red-600 max-w-xs p-4"
      >
        <div className="image-container">
          <img
            src={item.image}
            alt="product image"
            onLoad={() => handleLoadedImg(item.id)}
          />
          {!isLoaded && <div className="loading-spinner">Loading...</div>}
        </div>
        <p className="text-2xl pt-4">{item.title}</p>
        <p className="text-4xl">${item.price}</p>
        <p>{item.description}</p>
        <p className="spacer p-2"></p>
        <QuantityPicker />
      </li>
    );
  });

  return (
    <>
      <ul className="flex min-w-full gap-8 justify-center flex-wrap">
        {productList}
      </ul>
    </>
  );
}

function QuantityPicker () {
  const [value, setValue] = useState(0);

  return (
  <div className="quantity-picker">
    <button onClick={() => {setValue(value + 1)}}>+</button>
    <input className="" type="number" value={value} onChange={(value) => setValue(value)}/>
    <button onClick={() => {setValue(value - 1)}}>&minus;</button>
  </div>
  )
}