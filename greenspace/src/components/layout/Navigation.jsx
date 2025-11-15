import React from "react";

export default function Navigation() {
  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex gap-6">
      {links.map((l, i) => (
        <a
          key={i}
          href={l.href}
          className="text-gray-700 hover:text-green-700 font-medium"
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
