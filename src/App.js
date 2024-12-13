import React, { useState } from "react";
import { motion } from "framer-motion";
import HomeIcon from "./components/HomeIcon";
import PopupModal from "./components/PopupModal";
import GoalButton from "./components/GoalButton";
import FooterButton from "./components/FooterButton";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 fixed top-0 left-0 right-0 z-10"> 
      <HomeIcon onClick={() => setIsPopupOpen(true)} />
      <PopupModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

    
      <motion.h1
        className="text-4xl font-bold mb-2 text-center mt-24" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        How it works
      </motion.h1>

      <motion.h2
        className="text-xl font-medium mb-6 text-center text-gray-600"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        1 Lakh+ Customers
      </motion.h2>

    
      <div className="flex justify-center gap-16 mb-6">
        <div className="text-center">
          <div className="text-4xl mb-2 text-black">𒈞</div>
          <div className="text-sm font-medium">Personal Notification</div>
        </div>

        <div className="text-center">
          <div className="text-4xl mb-2 text-black">♨</div>
          <div className="text-sm font-medium">Tasty Meals</div>
        </div>

        <div className="text-center">
          <div className="text-4xl mb-2 text-black">⛟</div>
          <div className="text-sm font-medium">Doorstep Delivery</div>
        </div>

       
        <div className="text-center">
          <div className="text-4xl mb-2 text-black">✇</div>
          <div className="text-sm font-medium">Weekly Health Analysis</div>
        </div>
      </div>

      <motion.h2
        className="text-2xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Your Goals
      </motion.h2>

    
      <div className="flex flex-col items-center gap-4 mb-6">
        {["Lose Weight","Tiffin","Gain Muscles","Diabetes Management"].map((text) => (
          <GoalButton key={text} text={text} />
        ))}
      </div>

      <FooterButton />
    </div>
  );
};

export default App;
