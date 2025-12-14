import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaUser, FaEnvelope, FaCommentDots, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaPhone } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // For success/error messages

 const sendEmail = (e) => {
  e.preventDefault();
  setStatus("sending");

  emailjs
    .sendForm(
      "service_1pze6g2",
      "template_1fn6v1q",
      form.current,
      "E2k4yDEKx24Zm13ak"
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus("success"); // show success message
        e.target.reset();

        // Auto-hide after 3 seconds
        setTimeout(() => {
          setStatus("");
        }, 3000);
      },
      (error) => {
        console.log(error.text);
        setStatus("error"); // show error message

        // Auto-hide after 3 seconds
        setTimeout(() => {
          setStatus("");
        }, 3000);
      }
    );
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
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4"
      >
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>

        <div className="relative">
          <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition"
        >
          Send Message
        </button>

        {/* Inline notification */}
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
          href="https://www.tiktok.com/@yourusername"
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
