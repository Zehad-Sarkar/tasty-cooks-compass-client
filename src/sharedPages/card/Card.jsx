import { Button } from "flowbite-react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  FaArrowRight,
  FaBriefcase,
  FaCoffee,
  FaRegStar,
  FaRegThumbsUp,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { id, name, picture, experience, numberOfRecipes, likes, rating } =
    data;
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full p-2 rounded-lg h-96 md:h-auto md:w-48 md:rounded-none"
        src={picture}
        alt=""
        loading="lazy"
      />
  
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Chef Name: {name}
        </h5>
        <p className="flex items-center mb-3 font-normal text-gray-700 dark:text-gray-400">
          experience :<FaBriefcase className="me-2"></FaBriefcase>
          {experience}
        </p>
        <p className="flex items-center mb-3 font-normal text-gray-700 dark:text-gray-400">
          Recipes:<FaCoffee className="me-2"></FaCoffee>
          {numberOfRecipes}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Rating :
          <Rating
            readonly
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
        </p>
        <p className="flex items-center mb-3 font-normal text-gray-700 dark:text-gray-400">
          likes : <FaRegThumbsUp className="me-2"></FaRegThumbsUp> {likes}
        </p>

        <Link to={`/chefrecipes/${id}`}>
          <Button className=" btn">
            View Recepies <FaArrowRight className="ms-2"></FaArrowRight>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
