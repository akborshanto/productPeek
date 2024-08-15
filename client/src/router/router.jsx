
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Root from "../Root/Root";
import Login from "../page/login/Login";
import { Register } from './../page/register/Register';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,

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
        }
      ]
    },
  ]);