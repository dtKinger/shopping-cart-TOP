import allProducts from "../data/products.json"

export default function ProductList () {

  const productList = allProducts.map((item) => {
    return <li key={item.id}
    className="
    flex-col
    gap-40
    bg-black
    text-red-400
    max-w-xs
    p-4
    ">
      <img src={item.image} alt="product image" />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <p>{item.description}</p>
    </li>
  })
  
  return(
    <>
    <p>Hello World</p>
    <ul className="flex min-w-full gap-8 justify-center flex-wrap">
      {productList}
    </ul>
    </>
  )
}