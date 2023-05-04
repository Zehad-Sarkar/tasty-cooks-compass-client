import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayoute/Main";
import Home from "../sharedPages/Home/Home";
import Blog from "../sharedPages/blogs/Blog";
import Login from "../sharedPages/login/Login";
import Register from "../sharedPages/register/Register";
import ChefRecipes from "../sharedPages/chefRecipes/ChefRecipes";
import ProtectPage from "../protectedPage/ProtectPage";
// import ErrorPages from "../errorPages/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chefrecipes/:id",
        element: (
          <ProtectPage>
            <ChefRecipes></ChefRecipes>
          </ProtectPage>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tasty-cookes-compass-server-zehad-sarkar.vercel.app/chefrecipes/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
