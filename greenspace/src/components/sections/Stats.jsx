import React from "react";

export default function Stats() {
  const data = [
    { number: "10+", label: "Years Experience" },
    { number: "25+", label: "Cities Impacted" },
    { number: "5k+", label: "Gardens Created" },
    { number: "200+", label: "Workshops Hosted" },
  ];

  return (
    <section className="w-full -mt-16 relative z-20">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {data.map((item, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-green-700">{item.number}</h3>
            <p className="mt-1 text-gray-600 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
