import { Button } from "flowbite-react";
import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
// import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const { googleSignIn, userSignIn, githubSignIn, resetpassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password) {
      setPassword("password should not match");
    }
    userSignIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // google sign in handler
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //github sign in handler
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const githubUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // reset password event handler
  const handleResetPassword = (event) => {
    resetpassword(emailRef.current.value)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

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
            <p className="text-red-500">{password}</p>
            <p>
              Forgot your
              <button onClick={handleResetPassword} className="btn-link">
                password ?
              </button>
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
              onClick={handleGoogleSignIn}
              type="button"
              className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <FaGoogle className="mr-2"></FaGoogle> Sign in with Google
            </button>
            <button
              onClick={handleGithubSignIn}
              type="button"
              className="text-white w-full bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              <FaGithub className="mr-2"></FaGithub> Sign in with Github
            </button>
          </div>
        </div>
      </form>
      {/* <Toaster />; */}
    </div>
  );
};

export default Login;
