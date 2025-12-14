import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      <Footer />
    </>
  );
};

export default App;
