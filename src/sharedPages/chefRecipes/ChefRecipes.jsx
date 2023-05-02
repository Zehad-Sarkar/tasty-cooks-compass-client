import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import ViewRecipes from "./viewrecipes/ViewRecipes";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  useEffect(() => {
    fetch("http://localhost:5000/chefrecipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <h1>chef recipes</h1>

      <div className="">
        {recipes.map((recipe) => (
          <ViewRecipes recipe={recipe} key={recipe.id}></ViewRecipes>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
