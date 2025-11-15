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

// Inline Features Section
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

        {/* FEATURES */}
        <FeatureList />

        {/* ABOUT */}
        <About />

        {/* PROJECTS */}
        <section id="projects" className="py-20 bg-white">
          <Container>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
                Our Projects
              </h2>
              <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
                Recent transformations — rooftop gardens, terraces, community
                parks, and interactive learning spaces.
              </p>
            </div>

            <Projects />
          </Container>
        </section>

        {/* CONTACT */}
        <section className="bg-green-50">
          <Contact />
        </section>

        {/* PRODUCT GRID */}
        <section className="py-20 bg-white">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-green-800">
                Shop Essentials
              </h3>
              <a
                href="#collection"
                className="text-sm underline text-gray-600"
              >
                View all products
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                title="Rooftop Planter Kit"
                description="Lightweight modular planter ideal for balconies."
                img="https://images.unsplash.com/photo-1601597119198-4d6a3f9f7cd6?auto=format&fit=crop&w=800&q=80"
              />
              <Card
                title="Native Pollinator Seeds"
                description="Flower mixes designed to attract butterflies and bees."
                img="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
              />
              <Card
                title="Irrigation Drip Kit"
                description="Water-efficient irrigation system for easy plant care."
                img="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"
              />
              <Card
                title="Workshop Voucher"
                description="Gift an interactive design workshop experience."
                img="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </Container>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
