import Layout from './Layout';
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./routes/ProductList.jsx"
import AboutUs from './routes/pages.about';

export default function Router () {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {index: true, element: <App />},
        {path: "/shop", element: <ProductList />},
        {path: "/pages/about", element: <AboutUs />}
      ],
    },
  ]);

  return (
    <RouterProvider
      router={router}
    />
  )
}

