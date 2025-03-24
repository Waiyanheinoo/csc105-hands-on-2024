import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          404 - Page Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-blue-600 hover:underline text-lg font-semibold"
        >
          Go back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
