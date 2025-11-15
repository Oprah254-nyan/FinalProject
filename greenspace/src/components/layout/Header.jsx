import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-green-700 mb-3 md:mb-0">🌱 GreenSpace</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
