import React from "react";

const About = () => {
  return (
    <div
      id="about-section"
      className="min-h-screen flex items-center justify-center bg-[#e6e9e3] px-6 py-12"
    >
      <div className="bg-white shadow-md rounded-xl p-10 max-w-5xl w-full">
        <h2 className="text-5xl font-bold mb-6 text-gray-900">About Me</h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          I'm a Web Developer based in Nepal, creating modern, user-friendly
          websites that bring ideas to life.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          I am currently working on several creative web projects and love
          experimenting with modern web technologies while building efficient
          and engaging web applications.
        </p>

        {/* <div className="flex flex-col sm:flex-row justify-between border-t border-gray-200 pt-6 text-center sm:text-left">
          <div className="flex-1 mb-4 sm:mb-0">
            <h3 className="text-3xl font-bold text-lime-700">2+</h3>
            <p className="text-gray-600 text-sm">Years of experience</p>
          </div>
          <div className="flex-1 mb-4 sm:mb-0">
            <h3 className="text-3xl font-bold text-lime-700">20+</h3>
            <p className="text-gray-600 text-sm">Completed projects</p>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-lime-700">10+</h3>
            <p className="text-gray-600 text-sm">Clients worldwide</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
