import React from "react";

export default function FeaturedCategories({ onSelect }) {
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

  return (
    <section className="max-w-6xl mx-auto px-6 py-8 text-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Featured Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onSelect(c)}
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 hover:shadow-md transition text-center"
          >
            <div className="text-lg font-medium">{c}</div>
            <div className="mt-2 text-sm opacity-80">
              {c === "All" ? "Discover all" : `${c} recipes`}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
