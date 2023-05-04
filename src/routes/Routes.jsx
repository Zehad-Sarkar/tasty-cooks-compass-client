import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayoute/Main";
import Home from "../sharedPages/Home/Home";
import Blog from "../sharedPages/blogs/Blog";
import Login from "../sharedPages/login/Login";
import Register from "../sharedPages/register/Register";
import ChefRecipes from "../sharedPages/chefRecipes/ChefRecipes";
import ProtectPage from "../protectedPage/ProtectPage";
import CategoriesList from "../sharedPages/category/CategoriesList";
import Categories from "../sharedPages/category/Categories";
import CategoryData from "../sharedPages/category/CategoryData";
import About from "../sharedPages/about/About";
import Contact from "../sharedPages/Contact";

import ErrorPages from "../errorPages/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/list/:id",
        element: <CategoryData></CategoryData>,
        loader: ({ params }) =>
          fetch(
            `https://tasty-cookes-compass-server-zehad-sarkar.vercel.app/list/${params.id}`
          ),
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
