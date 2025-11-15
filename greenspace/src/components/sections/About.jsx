import React from "react";
import Container from "../common/Container";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-green-800 mb-4">About Us</h2>
        <p className="text-gray-700 max-w-3xl text-lg">
          GreenSpace is dedicated to designing living environments that support
          biodiversity, elevate community well-being, and promote ecological
          balance. Our team brings together innovators in landscape design,
          sustainability, and environmental education.
        </p>
      </Container>
    </section>
  );
}
