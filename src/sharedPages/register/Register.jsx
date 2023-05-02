import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../../src/index.css";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [regUser, setRegUser] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);
    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        setRegUser("User Registration Successfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="m-4">
      <h1 className="p-1 mx-auto mb-2 text-4xl font-extrabold text-purple-500 w-80">
        Please Register
      </h1>
      <form onSubmit={handleRegister}>
        <div className="p-4 mx-auto border-2 border-blue-300 rounded w-80">
          <div className="">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your name"
              required
            ></input>
          </div>
          <div className="">
            <label
              htmlFor="photourl"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Photo Url
            </label>
            <input
              type="text"
              name="photourl"
              id="photourl"
              className="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your photo url"
            ></input>
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your Email"
              required
            ></input>
          </div>
          <div className="">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="passsword"
              className="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your password"
              required
            ></input>
          </div>
          <Button type="submit" className="mt-2 btn">
            Register
          </Button>
          <p className="mt-2">
            Allready have an account?
            <Link to="/login" className="text-blue-600 ms-1">
              Login
            </Link>
          </p>
          <p className="text-green-600">{regUser}</p>
        </div>
      </form>
    </div>
  );
};

export default Register;
