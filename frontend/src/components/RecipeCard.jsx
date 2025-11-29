import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition text-gray-100">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{recipe.title}</h3>

        <div className="mt-2 flex items-center justify-between text-sm opacity-90">
          <span>{recipe.category}</span>
          <span>{recipe.time} min</span>
        </div>

        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1 rounded bg-amber-500 text-white text-sm">
            View Details
          </button>

          <button className="px-3 py-1 rounded border border-gray-600 text-sm">
            Save
          </button>
        </div>
      </div>
    </article>
  );
}
