import React from "react";

const EditDeleteButtons = () => {
return ( <div className="flex gap-2"> <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-white font-semibold transition">
Edit </button> <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-semibold transition">
Delete </button> </div>
);
};

export default EditDeleteButtons;
