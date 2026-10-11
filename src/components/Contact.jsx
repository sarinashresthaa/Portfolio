import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "1b764032-851c-46a7-9bb7-499458a72ba1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        console.log(data.message);
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }

    // Auto-hide after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div
      id="contact-section"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6"
    >
      <div className="text-4xl font-bold mb-8 text-center">
        Contact <span className="text-lime-600">Me</span>
        <div className="text-xl font-normal text-gray-600 mt-2">Let's chat</div>
      </div>

      <form
        onSubmit={sendEmail}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4"
      >
        {/* Optional: custom email subject */}
        <input
          type="hidden"
          name="subject"
          value="New message from your portfolio"
        />

        {/* Honeypot spam protection (hidden from real users) */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>

        <div className="relative">
          <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 font-semibold text-center mt-2">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-semibold text-center mt-2">
            ❌ Failed to send message. Please try again.
          </p>
        )}
        {status === "sending" && (
          <p className="text-gray-500 font-medium text-center mt-2">
            ⏳ Sending message...
          </p>
        )}
      </form>

      <div className="flex space-x-6 mt-6 text-2xl text-gray-600">
        <a
          href="https://www.facebook.com/profile.php?id=61582627443539"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 transition hover:text-blue-700"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/sarina__shrestha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 transition hover:text-pink-600"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/sarina-shrestha-a52565272/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 transition hover:text-blue-800"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.tiktok.com/@sarryyy___"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black transition hover:text-gray-800"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default Contact;
