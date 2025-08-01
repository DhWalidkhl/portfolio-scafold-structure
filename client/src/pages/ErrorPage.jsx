import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16 ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl ">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, system couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-400">
              But don't worry, you can find plenty of other things on
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              to='/'
              className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
