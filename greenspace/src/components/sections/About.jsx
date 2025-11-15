import React from "react";
import Card from "../common/Card";
import aboutImage from "../../assets/images/project1.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={aboutImage}
            alt="About GreenSpace"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 text-left">
          <h3 className="text-3xl font-semibold mb-4 text-green-700">Creating Sustainable Green Spaces</h3>
          <p className="text-gray-700 mb-8">
            GreenSpace is dedicated to making every space greener, cleaner, and more sustainable.
          </p>
          <div className="space-y-6">
            <Card title="Eco Landscaping" description="Transforming outdoor areas into sustainable green spaces." />
            <Card title="Urban Gardening" description="Turning rooftops, balconies, and small yards into lush gardens." />
            <Card title="Green Consultation" description="Helping individuals and organizations build a sustainable future." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
