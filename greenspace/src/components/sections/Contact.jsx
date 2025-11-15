import React from "react";
import Button from "../common/Button";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 text-center">
      <h3 className="text-3xl font-semibold mb-4 text-green-700">Get In Touch</h3>
      <p className="mb-6 text-gray-700">Have a project or idea? Let’s grow it together!</p>
      <form className="flex flex-col md:flex-row justify-center gap-3 max-w-xl mx-auto">
        <input type="text" placeholder="Your Name" className="px-4 py-3 w-full md:w-1/3 rounded-lg border border-gray-300 focus:outline-none" />
        <input type="email" placeholder="Your Email" className="px-4 py-3 w-full md:w-1/3 rounded-lg border border-gray-300 focus:outline-none" />
        <Button className="bg-green-600 hover:bg-green-700">Send Message</Button>
      </form>
    </section>
  );
};

export default Contact;
