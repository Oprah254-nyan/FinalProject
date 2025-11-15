import React from "react";
import Button from "../common/Button";
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-green-100 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-green-700 mb-4">
          Grow Greener with GreenSpace
        </h2>
        <p className="text-gray-700 mb-6">
          We design eco-friendly spaces that inspire harmony between people and nature.
        </p>
        <Button className="bg-green-600 hover:bg-green-700">Discover More</Button>
      </div>
      <div className="mt-10">
        <img
          src={heroImage}
          alt="GreenSpace Eco Landscaping"
          className="mx-auto rounded-2xl shadow-lg w-full max-w-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
