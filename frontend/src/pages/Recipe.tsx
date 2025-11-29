import React, { useState, useEffect } from "react";
import Home from "./Home";
import RecipeList from "./RecipeList";

export default function Recipe() {
  const [showList, setShowList] = useState(true);
  const [category, setCategory] = useState("All");
  const [timeFilter, setTimeFilter] = useState("any");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [category, timeFilter, query]);
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {showList ? (
        <RecipeList
          category={category}
          setCategory={setCategory}
          timeFilter={timeFilter}
          setTimeFilter={setTimeFilter}
          query={query}
          setQuery={setQuery}
          page={page}
          setPage={setPage}
        />
      ) : ("")}

      <div className="text-center py-6">
        <button
          onClick={() => setShowList(!showList)}
          className="px-4 py-2 bg-amber-600 text-white rounded shadow"
        >
          {showList ? "Go to Home" : "Go to Recipe List"}
        </button>
      </div>
    </div>
  );
}
