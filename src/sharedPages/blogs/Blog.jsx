import React from "react";

const Blog = () => {
  return (
    <div className="m-4">
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
          controlled components refer to components that have their state and
          behavior controlled by the parent component.
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
          <span>Q3.</span> What are the difference between nodejs and express
          js?
        </h1>
        <p>
          <span className="text-lg text-blue-400 text-bold me-2">Nodejs:</span>{" "}
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
            Custom hook:
          </span>
          Custom hooks offer reusability as when a custom hook is created, it
          can be reused easily, which makes the code cleaner and reduces the
          time to write the code. It also enhances the rendering speed of the
          code as a custom hook does not need to be rendered again and again
          while rendering the whole code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
