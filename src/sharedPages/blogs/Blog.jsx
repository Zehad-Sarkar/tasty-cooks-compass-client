import React, { useContext, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Button } from "flowbite-react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  const targetRef = useRef();
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => <Button onClick={toPdf} className="absolute top-24 right-3 btn">Download Pdf</Button>}
      </Pdf>
      <div ref={ref}>
        <div className="m-16">
          <div className="">
            <h1 className="text-xl font-medium">
              <span>Q1.</span> What are the differences between uncontrolled and
              controlled components?
            </h1>

            <p>
              <span className="text-lg text-blue-400 text-bold me-2">
                Uncontrolled Components:
              </span>
              Uncontrolled components refer to components that manage their own
              state internally.
            </p>

            <p>
              <span className="text-lg text-blue-400 text-bold me-2">
                Controlled Components:
              </span>
              controlled components refer to components that have their state
              and behavior controlled by the parent component.
            </p>
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-medium">
              <span>Q2.</span> How to validate React props using PropTypes?
            </h1>

            <p>
              <span className="text-lg text-blue-400 text-bold me-2">
                React props using PropTypes validation are:
              </span>
            </p>

            <ol>
              <li>1. The prop can be of any data type.</li>
              <li>2. The prop should be a function.</li>
              <li>3. The prop should be an array.</li>
              <li>4. The prop should be a Boolean.</li>
              <li>5. The prop should be a number.</li>
              <li>6. The prop should be a string.</li>
              <li>7. The prop should be an object.</li>
            </ol>
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-medium">
              <span>Q3.</span> What are the difference between nodejs and
              express js?
            </h1>

            <p>
              <span className="text-lg text-blue-400 text-bold me-2">
                Nodejs:
              </span>
              Node. js is a platform for building the i/o applications which are
              server-side event-driven and made using JavaScript.
            </p>

            <p>
              <span className="text-lg text-blue-400 text-bold me-2">
                Expressjs:
              </span>
              Express. js is a framework based on Node.
            </p>
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-medium">
              <span>Q4.</span> What is a custom hook, and why will you create a
              custom hook?
            </h1>

            <p>
              <span className="text-lg text-blue-400 text-bold me-2">
                Custom hook :
              </span>
              Custom hooks offer reusability as when a custom hook is created,
              it can be reused easily, which makes the code cleaner and reduces
              the time to write the code. It also enhances the rendering speed
              of the code as a custom hook does not need to be rendered again
              and again while rendering the whole code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

