import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function RecipeDetail() {
  const { id } = useParams();
  const nav = useNavigate();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recipes")) || [];
    const found = saved.find((r) => r.id == id);
    setRecipe(found);
  }, [id]);

  const toggleBookmark = () => {
    const saved = JSON.parse(localStorage.getItem("recipes")) || [];
    const updated = saved.map((r) =>
      r.id == id ? { ...r, bookmarked: !r.bookmarked } : r
    );

    localStorage.setItem("recipes", JSON.stringify(updated));
    setRecipe({ ...recipe, bookmarked: !recipe.bookmarked });
  };

  if (!recipe)
    return <p className="text-center text-xl mt-10 ">Recipe Not Found</p>;

  return (
   <div className="bg-gray-900 text-gray-100 min-h-screen">
    <Navbar/>
    <div className="p-6 max-w-2xl mx-auto bg-gray-800">

      {/* Back Button */}
      <button
        onClick={() => nav("/")}
        className="mb-4 px-4 py-2  bg-amber-600 text-white rounded-lg hover:bg-gray-800 transition"
      >
        ← Back to Submit Recipe
      </button>

      <div className="bg-white shadow-xl rounded-xl p-6">
        <img
          src={recipe.image}
          className="w-full h-64 object-cover rounded-xl"
        />

        <h1 className="text-4xl font-bold mt-4 text-gray-800">{recipe.title}</h1>

        {/* Bookmark Button */}
        <button
          onClick={toggleBookmark}
          className={`mt-4 px-4 py-2 rounded-lg text-white transition ${
            recipe.bookmarked ? "bg-yellow-500" : "bg-gray-800"
          }`}
        >
          {recipe.bookmarked ? "★ Saved" : "☆ Bookmark"}
        </button>

        {/* Ingredients */}
        <h2 className="text-2xl font-semibold mt-6 text-gray-800">Ingredients</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          {recipe.ingredients.split(",").map((ing, i) => (
            <li key={i}>{ing.trim()}</li>
          ))}
        </ul>

        {/* Steps */}
        <h2 className="text-2xl font-semibold mt-6 text-gray-800">Steps</h2>
        <p className="mt-2 text-gray-600 whitespace-pre-line">
          {recipe.steps}
        </p>

        {/* Ratings */}
        <h2 className="text-2xl font-semibold mt-6 text-gray-800">Ratings</h2>
        <p className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐☆ (4.0)</p>
      </div>
    </div></div>
  );
}
