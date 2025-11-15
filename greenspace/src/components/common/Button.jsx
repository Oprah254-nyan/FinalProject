import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-5 py-2 rounded-lg font-medium text-white bg-green-700 hover:bg-green-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
