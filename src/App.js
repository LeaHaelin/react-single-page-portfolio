import React from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./styles/app.css";
import iconGithub from "./assets/images/icon-github.svg";
import iconFrontendM from "./assets/images/icon-frontend-mentor.svg";
import iconLinkedin from "./assets/images/icon-linkedin.svg";
import iconTwitter from "./assets/images/icon-twitter.svg";

function App() {

  return (
    <div className="App">
      <section className="header">
        <Nav iconGithub={iconGithub} iconFrontendM={iconFrontendM} iconLinkedin={iconLinkedin} iconTwitter={iconTwitter} />
        <Hero />
      </section>
      <hr className="line" />
      <Skills />
      <hr className="line" />
      <Projects />
      <Contact />
      <hr className="line" />
      <Footer iconGithub={iconGithub} iconFrontendM={iconFrontendM} iconLinkedin={iconLinkedin} iconTwitter={iconTwitter} />
    </div>
  );
}

export default App;
