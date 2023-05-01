import { Button } from "flowbite-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [user,setUser]=useState(null)
  return (
    <div className="items-center justify-around m-4 md:flex">
      <div className="text-2xl font-bold md:text-4xl">
        <h1 className="text-purple-600">
          Tasty
          <span className="text-3xl text-purple-400 md:text-5xl font-extra-bold">
            Cookes
          </span>
          Compass
        </h1>
      </div>
      <div className="flex gap-8 mt-2 font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {user ? <>profile</> : <Button to='/login'> Login</Button>}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
