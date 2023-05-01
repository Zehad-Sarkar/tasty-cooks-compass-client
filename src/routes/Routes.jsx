import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayoute/Main";
import Home from "../sharedPages/Home/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      }
    ]
  }
])

export default router;