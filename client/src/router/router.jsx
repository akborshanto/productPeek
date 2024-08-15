
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Root from "../Root/Root";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,

      /* children */
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);