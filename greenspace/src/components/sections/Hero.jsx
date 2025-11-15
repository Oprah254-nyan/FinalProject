// src/components/sections/Hero.jsx
import React from "react";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
          Designing Greener<br />Futures
        </h1>

        <p className="text-gray-200 mt-4 text-lg md:text-xl">
          GreenSpace transforms ordinary environments into vibrant,
          sustainable ecosystems where people and nature thrive together.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl">
            Get Started
          </Button>

          <Button className="bg-white/80 text-green-700 hover:bg-white px-8 py-3 rounded-xl">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
