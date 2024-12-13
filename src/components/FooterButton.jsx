import React, { useState } from "react";
import { motion } from "framer-motion";

const FooterButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 mx-auto w-[90%] bg-white rounded-t-2xl shadow-lg"
      style={{ maxWidth: "2500px" }}
      animate={{
        translateY: isExpanded ? 0 : "calc(100% - 4rem)",
      }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      onClick={() => setIsExpanded(!isExpanded)} // toggle state on click anywhere on footer
    >
      
      <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
        <span className="text-black">Summary</span>
        <span className="text-sm text-black font-bold">
          {isExpanded ? "∨" : "∧"}
        </span>
      </div>

      {isExpanded && (
        <div className="p-4 border-t border-gray-300 text-gray-800">
         
          <div className="space-y-4">
            <div className="flex items-center gap-4">
             
              <div className="bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
                ✔
              </div>
            
              <div>
                <h2 className="text-lg font-bold">Goal</h2>
                <p className="text-sm text-gray-700">Healthy Eating</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
            
              <div className="bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
                ✔
              </div>
             
              <div>
                <h2 className="text-lg font-bold">Gender</h2>
                <p className="text-sm text-gray-700">Male</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default FooterButton;
