import React from "react";

const Navigation = () => {
  return (
    <nav className="flex space-x-6 text-gray-600 font-medium">
      <a href="#about" className="hover:text-green-700">About</a>
      <a href="#projects" className="hover:text-green-700">Projects</a>
      <a href="#contact" className="hover:text-green-700">Contact</a>
    </nav>
  );
};

export default Navigation;
