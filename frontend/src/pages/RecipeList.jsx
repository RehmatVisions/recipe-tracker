import React, { useMemo } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import RecipeCard from "../components/RecipeCard";
import Pagination from "../components/Pagination";

const mockRecipes = Array.from({ length: 28 }).map((_, i) => ({
  id: i + 1,
  title: `Delicious Recipe ${i + 1}`,
  category: ["Breakfast", "Lunch", "Dinner", "Dessert"][i % 4],
  time: [5, 10, 15, 20, 30][i % 5],
  image: `https://picsum.photos/seed/recipe${i + 1}/600/400`,
}));

export default function RecipeList({
  category,
  setCategory,
  timeFilter,
  setTimeFilter,
  query,
  setQuery,
  page,
  setPage,
}) {
  const perPage = 8;

  const filtered = useMemo(() => {
    let data = mockRecipes.slice();

    if (category !== "All")
      data = data.filter((r) => r.category === category);

    if (timeFilter !== "any")
      data = data.filter((r) => r.time <= Number(timeFilter));

    if (query.trim())
      data = data.filter((r) =>
        r.title.toLowerCase().includes(query.toLowerCase())
      );

    return data;
  }, [category, timeFilter, query]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const current = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">All Recipes</h2>

        <Filters
          category={category}
          setCategory={setCategory}
          timeFilter={timeFilter}
          setTimeFilter={setTimeFilter}
          query={query}
          setQuery={setQuery}
        />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {current.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>{filtered.length} results</div>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </section>
    </div>
  );
}
