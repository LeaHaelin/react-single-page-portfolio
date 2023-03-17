import React from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./styles/app.css";


function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <hr className="line top-line" />
      <Skills />
      <hr className="line middle-line" />
      <Projects />
      <Contact />
      <hr className="line bottom-line" />
      <Footer />
    </div>
  );
}

export default App;
