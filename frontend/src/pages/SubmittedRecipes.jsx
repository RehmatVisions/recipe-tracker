import React from "react";
import EditDeleteButtons from "../components/EditDeleteButtons";

const SubmittedRecipes = () => {
const recipes = [
{ id: 1, title: "Homemade Pizza" },
{ id: 2, title: "Chocolate Cake" },
];

return ( <div className="min-h-screen bg-gray-900 flex flex-col">
{/* Navbar */} <nav className="flex justify-between items-center px-8 py-4 bg-gray-800"> <div className="text-2xl font-bold text-white">
Food<span className="text-orange-500">Box</span> </div> <div> <a href="/" className="text-white hover:text-orange-500 mx-4">Home</a> <a href="/recipes" className="text-white hover:text-orange-500 mx-4">Recipes</a> <a href="/submit" className="text-white hover:text-orange-500 mx-4">Submit Recipes</a> <a href="/login" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded ml-4">Login</a> </div> </nav>

```
  {/* Main Submitted Recipes Section */}
  <div className="flex-1 flex items-center justify-center px-4 py-8">
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-3xl font-bold mb-6 text-orange-500 text-center">Submitted Recipes</h2>
      <div className="space-y-4">
        {recipes.map((r) => (
          <div
            key={r.id}
            className="bg-gray-700 p-4 rounded flex justify-between items-center"
          >
            <span className="text-white font-semibold">{r.title}</span>
            <EditDeleteButtons />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
);
};

export default SubmittedRecipes;
