import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="py-10 mt-12 bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="px-4 mb-4 md:w-1/4 md:mb-0">
              <h2 className="mb-4 text-lg text-white">Tasty Cookes Compass</h2>
            </div>
            <div className="px-4 mb-4 md:w-1/4 md:mb-0">
              <h2 className="mb-4 text-lg text-white">Links</h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 mb-4 md:w-1/4 md:mb-0">
              <h2 className="mb-4 text-lg text-white">Contact Us</h2>
              <p className="leading-loose text-gray-400">
                123 Main Street
                <br />
                New York, NY 10001
                <br />
                (123) 456-7890
              </p>
            </div>
            <div className="px-4 md:w-1/4">
              <h2 className="mb-4 text-lg text-white">Follow Us</h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a
                    href="https://www.facebook.com/"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="mr-2 fab fa-facebook-square"></i> Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="mr-2 fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://twitter.com/"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="mr-2 fab fa-twitter-square"></i> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-4 bg-gray-900">
          <div className="container px-4 mx-auto text-center">
            <p className="text-gray-400">
              &copy; 2023 Tasty Cookes Compass. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
