import React from "react";
import Button from "../common/Button";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="py-32 bg-green-100">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-green-800">
            Designing Greener Futures
          </h1>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
            GreenSpace transforms ordinary environments into vibrant,
            sustainable ecosystems where people and nature thrive together.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button>Get Started</Button>
            <Button className="bg-green-900">Learn More</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
