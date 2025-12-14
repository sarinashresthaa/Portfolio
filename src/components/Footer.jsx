import React from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lime-900 text-gray-300 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Sarina Shrestha
        </h2>
        <p className="text-gray-400 mb-6">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex justify-center space-x-6 text-xl">
          <a
            href="https://github.com/sarinashresthaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sarina-shrestha-a52565272/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="tel:+9779825865759"
            className="hover:text-lime-400 transition"
          >
            <FaPhone />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
