import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">GreenSpace</h1>
        <Navigation />
      </div>
    </header>
  );
}
