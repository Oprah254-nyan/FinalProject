import React from "react";
import Card from "../common/Card";

export default function Projects() {
  const projects = [
    {
      name: "Urban Roof Garden",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Eco Backyard",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Community Park",
      img: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <Card
          key={i}
          title={p.name}
          description="A sustainable green initiative by GreenSpace."
          img={p.img}
        />
      ))}
    </div>
  );
}
