import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { name, imgLink, experience, numberOfRecipes, likes, chef_rating } =
    data;
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full p-2 rounded-lg h-96 md:h-auto md:w-48 md:rounded-none"
        src={imgLink}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Chef Name: {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          year of experience: {experience}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          number of recepies: {numberOfRecipes}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          rating: {chef_rating}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          likes: {likes}
        </p>
        <Link to="/chefrecipes">
          <Button className="btn">View Recepies</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
