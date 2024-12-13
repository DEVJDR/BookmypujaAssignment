import React from "react";
import { motion } from "framer-motion";

const GoalButton = ({ text }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    className="bg-yellow-400 text-black p-4 w-64 h-12 rounded-full shadow-lg hover:bg-yellow-500 transition-colors border-2 border-yellow-400 flex items-center justify-center"
  >
    {text}
  </motion.button>
);

export default GoalButton;
