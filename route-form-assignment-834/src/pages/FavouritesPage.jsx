import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const FavouritesPage = () => {
  const navigate = useNavigate();
  const schema = z.object({
    number: z.number().min(1).max(100),
    query: z.enum(["love", "like"]),
    size: z.enum(["small", "medium", "large"]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const url = `/fav/${data.number}?q=${data.query}&size=${data.size}`;
    navigate(url);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Favourites Page
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-gray-700 font-medium mb-2"
            >
              Number (1-100):
            </label>
            <input
              type="number"
              id="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              {...register("number", { valueAsNumber: true })}
            />
            {errors.number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.number.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Q:</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="love"
                  {...register("query")}
                  className="mr-2"
                />
                Love
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="like"
                  {...register("query")}
                  className="mr-2"
                />
                Like
              </label>
            </div>
            {errors.query && (
              <p className="text-red-500 text-sm mt-1">
                {errors.query.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Size:
            </label>
            <select
              {...register("size")}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.size && (
              <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FavouritesPage;
