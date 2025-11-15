import React from "react";

const Card = ({ title, description, img }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition p-6">
      {img && <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />}
      <h4 className="font-semibold text-lg">{title}</h4>
      {description && <p className="text-gray-700 text-sm mt-1">{description}</p>}
    </div>
  );
};

export default Card;
