import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <header className="w-full bg-gray-800 text-gray-100">
      <div className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find delicious recipes for every mood
          </h1>

          <p className="mt-4 text-lg opacity-90">
            Explore curated recipes, filter by category or cooking time, and discover favourites.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/recipe"
              className="px-5 py-3 bg-amber-600 text-white rounded-md shadow hover:scale-105 transition"
            >
              Explore Recipes
            </Link>

            <Link
              to="/submit"
              className="px-5 py-3 border border-gray-600 rounded-md"
            >
              Submit Recipe
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
            alt="banner"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}
