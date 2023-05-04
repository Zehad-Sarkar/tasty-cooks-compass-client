import { useLoaderData } from "react-router-dom";
import { FaRegHeart, FaRegStar, FaRegThumbsUp, FaStar } from "react-icons/fa";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { Button } from "flowbite-react";
import Rating from "react-rating";

const ChefRecipes = () => {
  const [fav, setFav] = useState(false);
  const recipies = useLoaderData();
 
  const {
    name,
    picture,
    bio,
    experience,
    likes,
    numberOfRecipes,
    ingredients,
    recipe_name,
    cookingMethod,
    rating,
  } = recipies;

  const handleFavorite = () => {
    toast.success("Successfully Added to Favorite");

    setFav(true);
  };

  return (
    <div>
      <img
        className="object-cover w-full p-4 rounded-md"
        src="https://calibreworkforce.com.au/wp-content/uploads/2017/07/chef-banner-four.jpg"
        alt="Card Image"
      />
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-1/2 p-4 rounded-lg h-60 md:h-auto md:rounded-none"
            src={picture}
            alt=""
          />

          <div className="relative">
            <div className="flex flex-col justify-between p-2 leading-normal ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="font-medium me-2">Chef Name:</span>
                {name}
              </h5>
              <p className="w-auto mt-2 text-gray-500">
                <span className="font-medium me-2">Bio:</span> {bio}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-medium me-2"> Year of experience:</span>
                {experience}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-medium me-2">Number of recepies:</span>
                {numberOfRecipes}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-medium me-2">Rating:</span>
                <Rating
                  readonly
                  placeholderRating={rating}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-yellow-400"></FaStar>
                  }
                  fullSymbol={<FaStar></FaStar>}
                />
              </p>
              <p className="flex items-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="font-medium me-2">Likes:</span>
                <FaRegThumbsUp></FaRegThumbsUp>
                {likes}
              </p>
            </div>
            <Button
              onClick={handleFavorite}
              disabled={fav}
              className="absolute top-2 right-3 btn"
            >
              <FaRegHeart></FaRegHeart>
            </Button>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg">
          <div className="grid grid-cols-3 px-2 py-4 ">
            <div className="">
              <p className="mt-2 font-medium text-gray-500">Recipe Name</p>
              {recipe_name.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </div>
            <div className="">
              <p className="mt-2 font-medium text-gray-500">Ingredients</p>
              {ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </div>
            <div className="">
              <p className="mt-2 font-medium text-gray-500">Cooking method</p>
              {cookingMethod}
            </div>
          </div>
        </div>
      </div>
      <Toaster />;
    </div>
  );
};

export default ChefRecipes;
