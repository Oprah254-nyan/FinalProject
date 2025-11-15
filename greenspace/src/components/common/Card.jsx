import React from "react";

export default function Card({ title, description, img }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-lg font-semibold text-green-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
}
