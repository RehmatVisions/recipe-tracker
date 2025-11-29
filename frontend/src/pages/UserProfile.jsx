import React from "react";

const UserProfile = () => {
return ( <div className="min-h-screen bg-gray-900 flex flex-col">
{/* Navbar */} <nav className="flex justify-between items-center px-8 py-4 bg-gray-800"> <div className="text-2xl font-bold text-white">
Food<span className="text-orange-500">Box</span> </div> <div> <a href="/" className="text-white hover:text-orange-500 mx-4">Home</a> <a href="/recipes" className="text-white hover:text-orange-500 mx-4">Recipes</a> <a href="/submit" className="text-white hover:text-orange-500 mx-4">Submit Recipes</a> <a href="/login" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded ml-4">Login</a> </div> </nav>

```
  {/* Main Profile Section */}
  <div className="flex-1 flex items-center justify-center px-4 py-8">
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-xl">
      <h2 className="text-3xl font-bold mb-6 text-orange-500 text-center">My Profile</h2>
      <div className="flex items-center gap-6 mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="profile"
          className="rounded-full w-24 h-24"
        />
        <div>
          <h3 className="text-xl font-semibold text-white">Aimen Tayyab</h3>
          <p className="text-gray-300">aimen@example.com</p>
        </div>
      </div>
      <button className="w-full bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded text-white font-semibold transition">
        Edit Profile
      </button>
    </div>
  </div>
</div>
);
};

export default UserProfile;
