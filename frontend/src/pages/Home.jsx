import React from "react";
//import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FeaturedCategories from "../components/FeaturedCategories";
import SubmitRecipe from "./SubmitRecipe";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home({ setCategory }) {


  const nav=useNavigate();
  const handleclicks=()=>{
    nav('/submit');
  }
  return (
    <div className="bg-gray-900 text-gray-100">
     <Navbar/>
      <Banner />
      <FeaturedCategories onSelect={setCategory} />
    
  
  <div className="mt-6  flex gap-4">
          <button
            onClick={handleclicks}
            className="px-4 py-2  bg-amber-600 text-white rounded shadow max-w-6xl mx-auto"
          >
            Submit Your Recipe
          </button>
    </div>
    </div>
  );
}
