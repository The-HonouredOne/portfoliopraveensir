import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate=useNavigate()
  return (
    <div className="">
      <nav className="backdrop-blur-xl bg-white/70 shadow-lg rounded-2xl px-8 py-4 flex items-center justify-between">
        
        
        <div className="flex items-center gap-2 font-bold text-lg cursor-pointer"
        onClick={()=>navigate('/')}>
          <div className="w-9 h-9 bg-purple-600 text-white flex items-center justify-center rounded-full">
            P
          </div>
          Praveen
        </div>

        {/* Menu */}
        {/* <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">About</li>
          <li className="hover:text-purple-600 cursor-pointer">Services</li>
          <li className="hover:text-purple-600 cursor-pointer">Process</li>
          <li className="hover:text-purple-600 cursor-pointer">Portfolio</li>
          <li className="hover:text-purple-600 cursor-pointer">Blog</li>
        </ul> */}

        {/* Button */}
        <button 
        onClick={()=>navigate('/contact')}
        className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-lg font-semibold cursor-pointer">
          Contact
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
