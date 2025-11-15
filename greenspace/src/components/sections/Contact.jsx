import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6 max-w-xl">
          Have a project in mind? We’d love to help bring your green vision to
          life.
        </p>

        <form className="grid gap-4 max-w-lg">
          <input
            className="p-3 border rounded-lg"
            placeholder="Your Name"
            type="text"
          />
          <input
            className="p-3 border rounded-lg"
            placeholder="Email Address"
            type="email"
          />
          <textarea
            className="p-3 border rounded-lg"
            placeholder="Message"
            rows="4"
          />
          <Button>Send Message</Button>
        </form>
      </Container>
    </section>
  );
}
