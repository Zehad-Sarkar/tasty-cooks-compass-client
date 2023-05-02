import { Button } from "flowbite-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle ,FaGithub} from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef=useRef()

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  
  // reset password event handler
  const handleResetPassword = event => {
    console.log(emailRef.current.value);
  }
  return (
    <div>
      <h1 className="p-1 mx-auto mb-2 text-4xl font-extrabold text-purple-500 w-80">
        Please Login
      </h1>
      <form onSubmit={handleLogin}>
        <div className="p-4 mx-auto border-2 border-blue-300 rounded w-80">
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
              ref={emailRef}
              className="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type your Email"
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
              placeholder="Type your password"
              required
            ></input>
            <p>
              Forgot your <button onClick={handleResetPassword} className="btn-link">password ?</button>
            </p>
          </div>
          <Button type="submit" className="mt-2 btn">
            Login
          </Button>
          <p className="mt-2">
            Dont have an account? Go to
            <Link to="/register" className="text-blue-600 ms-1">
              Register
            </Link>
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <FaGoogle className="mr-2"></FaGoogle> Sign in with Google
            </button>
            <button
              type="button"
              className="text-white w-full bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              <FaGithub className="mr-2"></FaGithub> Sign in with Github
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
