import React from "react";

export default function WhatWeDo() {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          What We Do
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16">
          GreenSpace blends design and ecology to bring thriving greenspaces into everyday life — from balconies to community parks.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Living Design */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <img src="/icons/leaf.png" alt="Living Design" className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Living Design</h3>
            <p className="text-gray-600">
              We create biodiverse, beautiful green spaces that fit modern homes and urban rooftops.
            </p>
          </div>

          {/* Sustainable Practices */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <img src="/icons/water.png" alt="Sustainable Practices" className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Sustainable Practices</h3>
            <p className="text-gray-600">
              Native planting, water-efficient layouts, and long-term plans that respect the planet.
            </p>
          </div>

          {/* Community Impact */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <img src="/icons/heart.png" alt="Community Impact" className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Community Impact</h3>
            <p className="text-gray-600">
              Workshops and programs that help neighborhoods grow resilient and connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
