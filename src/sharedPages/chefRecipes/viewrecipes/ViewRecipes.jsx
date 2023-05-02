/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ViewRecipes = ({ recipe }) => {
  const {
    name,
    picture,
    bio,
    experience,
    likes,
    numRecipes,
    ingredients,
    recipe_name,
    cookingMethod,
    rating,
  } = recipe;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img
        className="object-cover w-full h-72"
        src={picture}
        alt="Card Image"
      />
      <div className="py-4">
        <h3 className="text-xl font-bold">Chef Name: {name} </h3>
        <p className="mt-2 text-gray-500">description: {bio}</p>
        <p className="mt-2 text-gray-500">Recipes: {recipe_name}</p>
        <p className="mt-2 text-gray-500">Ingredients: {ingredients}</p>
        <p className="mt-2 text-gray-500">Cooking method: {cookingMethod}</p>
        <p className="mt-2 text-gray-500">Rating : {rating}</p>
        <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
         Favorite
        </button>
      </div>
    </div>
  );
};

export default ViewRecipes;
