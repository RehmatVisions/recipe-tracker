import React from "react";

export default function Filters({
  category,
  setCategory,
  timeFilter,
  setTimeFilter,
  query,
  setQuery,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center md:items-end justify-between text-gray-100">
      <div className="flex gap-2 w-full md:w-auto">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 rounded bg-gray-800 border border-gray-700"
        >
          <option>All</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
        </select>

        <select
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          className="px-3 py-2 rounded bg-gray-800 border border-gray-700"
        >
          <option value="any">Any time</option>
          <option value="10">Under 10 min</option>
          <option value="20">Under 20 min</option>
          <option value="30">Under 30 min</option>
        </select>
      </div>

      <div className="flex gap-2 w-full md:w-72">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700"
        />

        <button className="px-3 py-2 rounded bg-amber-500 text-white">
          Search
        </button>
      </div>
    </div>
  );
}
