import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../ImageUploader";
import Navbar from "../components/Navbar";

export default function SubmitRecipe() {
  const nav = useNavigate();
  const [recipes, setRecipes] = useState([]);

  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    steps: "",
    image: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title) return alert("Title is required");
if (!form.ingredients) return alert("Ingredients is required");
if (!form.steps) return alert("Steps is required");
if (!form.image) return alert("image is required");
    const newRecipe = { id: Date.now(), ...form, bookmarked: false };
    const updatedRecipes = [...recipes, newRecipe];

    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    nav(`/recipe/${newRecipe.id}`);
  };

  return (
    
     <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar/>
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">Submit Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 space-y-4"
      >
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full p-3 border rounded-lg text-black"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Ingredients (comma separated)"
          className="w-full p-3 border rounded-lg text-black"
          rows="3"
          value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
        />

        <textarea
          placeholder="Cooking Steps"
          className="w-full p-3 border rounded-lg text-black"
          rows="4"
          value={form.steps}
          onChange={(e) => setForm({ ...form, steps: e.target.value })}
        />

        <ImageUploader onSelect={(img) => setForm({ ...form, image: img })} />

        <button className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition text-black">
          Submit Recipe
        </button>
      </form>
    </div></div>
  );
}
