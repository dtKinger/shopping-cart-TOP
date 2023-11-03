import allProducts from "../data/products.json";
import "../index.css";
import { useState } from "react";

export default function ProductList() {
  const [loadedImages, setLoadedImages] = useState([]);

  function handleLoadedImg(itemId) {
    // Update the state with the loaded image's itemId
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, itemId]);
  }

  const productList = allProducts.map((item) => {
    // Check if the current image's itemId is in the loadedImages array
    const isLoaded = loadedImages.includes(item.id);

    return (
      <li
        key={item.id}
        className="flex-col gap-40 bg-black text-red-400 max-w-xs p-4"
      >
        <div className="image-container">
          <img
            src={item.image}
            alt="product image"
            onLoad={() => handleLoadedImg(item.id)}
          />
          {!isLoaded && <div className="loading-spinner">Loading...</div>}
        </div>
        <p className="text-2xl">{item.title}</p>
        <p className="text-4xl">${item.price}</p>
        <p>{item.description}</p>
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
