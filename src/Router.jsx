import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./routes/ProductList.jsx"

export default function Router () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/shop",
      element: <ProductList />
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

