import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const FavouriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Favourite Details
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Your favourite post is{" "}
          <span className="font-bold text-blue-600">
            {searchParams.get("q")}
          </span>
          .
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Post ID is <span className="font-bold text-blue-600">{id}</span>.
        </p>
        <p className="text-lg text-gray-700">
          Size is{" "}
          <span className="font-bold text-blue-600">
            {searchParams.get("size")}
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default FavouriteDetailPage;
