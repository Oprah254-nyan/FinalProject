import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h4 className="text-2xl font-semibold mb-3">🌱 GreenSpace</h4>
        <p className="mb-6">
          Creating sustainable, thriving green spaces for communities.
        </p>
        <p className="text-sm text-green-200">
          © {new Date().getFullYear()} GreenSpace — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
