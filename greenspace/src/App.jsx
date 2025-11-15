import React from "react";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Common
import Container from "./components/common/Container";
import Button from "./components/common/Button";
import Card from "./components/common/Card";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Stats from "./components/sections/Stats";
import WhatWeDo from "./components/sections/WhatWeDo"; // ADDED

// ----------------------------
// INLINE FEATURES SECTION (you can delete later if replaced by WhatWeDo)
// ----------------------------
const FeatureList = () => {
  const features = [
    {
      title: "Living Design",
      description:
        "We create biodiverse, beautiful green spaces that fit modern homes and urban rooftops.",
      icon: "🌿",
    },
    {
      title: "Sustainable Practices",
      description:
        "Native planting, water-efficient layouts, and long-term maintenance plans that respect the planet.",
      icon: "💧",
    },
    {
      title: "Community Impact",
      description:
        "Workshops and programs that help neighborhoods grow resilient and connected green environments.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
            What We Do
          </h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            GreenSpace blends design and ecology to bring thriving greenspaces
            into everyday life — from balconies to community parks.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-green-800">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// ----------------------------
// MAIN APP
// ----------------------------
export default function App() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 antialiased">

      {/* HEADER */}
      <Header />

      <main>

        {/* HERO */}
        <Hero />

        {/* STATS */}
        <Stats />

        {/* WHAT WE DO (FULL SECTION) */}
        <WhatWeDo />

        {/* EMAIL SIGNUP BAR */}
        <section className="py-8 bg-white border-y border-green-100">
          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold text-green-800">
                  Join GreenSpace Community
                </h4>
                <p className="mt-1 text-sm text-gray-700 max-w-xl">
                  Sign up to receive seasonal gardening guides, sustainable
                  tips, and workshop invites.
                </p>
              </div>

              {/* FIXED INPUT + BUTTON */}
              <div className="flex gap-3">
                <input
                  aria-label="email"
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* PROJECTS */}
        <Projects />

        {/* ABOUT */}
        <About />

        {/* CONTACT */}
        <Contact />

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
