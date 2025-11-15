import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`px-6 py-3 text-white rounded-lg transition ${className}`}>
      {children}
    </button>
  );
};

export default Button;
