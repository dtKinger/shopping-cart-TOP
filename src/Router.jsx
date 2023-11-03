import Layout from './Layout';
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./routes/ProductList.jsx"

export default function Router () {
  const routerZ = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {index: true, element: <App />},
        {path: "/shop", element: <ProductList />}
      ],
    },
  ]);

  return (
    <RouterProvider 
      router={routerZ}
      // fallbackElement={<p>Loadingz...</p>}
    />
  )
}

