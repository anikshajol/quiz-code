import React from "react";

const Blog = () => {
  return (
    <div>
      <section>
        <div className="p-5">
          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold capitalize">
              What is the Purpose of react router?
            </h2>
            <p className="text-lg mt-6">
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </p>
          </section>
          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold capitalize">
              How does context API work?
            </h2>
            <p className="text-lg mt-6">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on.
            </p>
          </section>

          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold"> What is useRef used for? </h2>
            <p className="text-lg mt-6">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Blog;
