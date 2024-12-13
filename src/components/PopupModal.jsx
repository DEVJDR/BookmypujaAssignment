import React from "react";
import { motion } from "framer-motion";

const PopupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
       
        <div
            className="absolute top-2 right-6 text-2xl text-gray-500 font-bold cursor-pointer"
            onClick={onClose}
            >
            X
        </div>


        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded p-2 mb-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded p-2 mb-2 w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
          />
        
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-400 text-black p-2 rounded shadow hover:bg-yellow-500"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PopupModal;
