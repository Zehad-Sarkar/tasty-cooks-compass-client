import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayoute/Main";
import Home from "../sharedPages/Home/Home";
import Blog from "../sharedPages/blogs/Blog";
import Login from "../sharedPages/login/Login";
import Register from "../sharedPages/register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
       path: '/login',
        element:<Login></Login>
      },  
      {
       path: '/register',
        element:<Register></Register>
      },  
      
    ]
  }
])

export default router;