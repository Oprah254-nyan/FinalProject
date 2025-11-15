import React from "react";
import Card from "../common/Card";
import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";

const projects = [
  { name: "Urban Roof Garden", img: project1 },
  { name: "Eco Backyard", img: project2 },
  { name: "Community Park", img: project1 },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-green-100 py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h3 className="text-3xl font-semibold mb-6 text-green-700">Our Projects</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Card key={i} title={p.name} img={p.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
