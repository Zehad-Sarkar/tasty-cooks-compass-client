import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
}
  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={handleLogin}>
        <div className="p-4 mx-auto border-2 w-72">
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
          <Button type="submit" className="mt-2">
            Login
          </Button>
          <p className="mt-2">
            Dont have an account?
            <Link to="/register" className="text-blue-600 ms-1">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
