
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Root from "../Root/Root";
import Login from "../page/login/Login";
import { Register } from './../page/register/Register';
import Product from "../page/product/Product";
import Error from "../page/error/Error";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,

      /* children */
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/product",
          element:<Product></Product>,
          loader:()=>fetch('https://productpeek-rust.vercel.app/pagination')
        }
      ]
    },
  ]);