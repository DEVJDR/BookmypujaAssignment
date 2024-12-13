import React from "react";

const HomeIcon = ({ onClick }) => (
  <div className="fixed top-0 left-0 right-0 mx-auto w-[90%] px-4 py-2 shadow-none z-10 bg-transparent">
   
    <div className="flex items-center justify-between">
      
      <span className="text-yellow-400 text-4xl">{"<"}</span>

    
      <h2 className="text-lg text-gray-700 text-center flex-1">
        Personalize
      </h2>

     
      <button
        onClick={onClick}
        className="bg-yellow-400 p-2 rounded-full shadow-md hover:bg-yellow-500"
      >
        ☎
      </button>
    </div>
  </div>
);

export default HomeIcon;
