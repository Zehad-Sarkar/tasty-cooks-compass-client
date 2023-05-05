import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [error, setErrorr] = useState("");
  console.log(user);

  // logout handler
  const handleLogout = () => {
    userLogout()
      .then(() => {})
      .catch((error) => {
        setErrorr(error.message);
      });
  };

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

        <p>{user ? <span onClick={handleLogout}>logout</span> : ""}</p>
        <div>
          {user ? (
            <>
              <img
                className="w-8 h-8 rounded-full"
                src={user?.photoUrl? user.photoUrl:""}
                alt="user photo"
                title={user?.displayName? user.displayName:""}
              />
            </>
          ) : (
            <Link to="/login">
              <Button className="btn">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
