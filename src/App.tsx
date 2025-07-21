import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Helmet>
        <title>Nicolás Gutiérrez | Full-Stack Automation Engineer</title>
        <meta name="description" content="Professional portfolio of Nicolás Gutiérrez, a Full-Stack Automation and DevOps Engineer based in Maastricht, Netherlands" />
        <meta name="keywords" content="Nicolás Gutiérrez, Full Stack Developer, Automation Engineer, DevOps Engineer, Java Developer, Netherlands" />
        <meta name="author" content="Nicolás Gutiérrez" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <div id="home" className="pattern-grid">
          <Hero />
        </div>
        <div className="pattern-dots">
          <Experience />
        </div>
        <div className="pattern-waves">
          <Education />
        </div>
        <div className="pattern-dots">
          <Skills />
        </div>
        <div className="pattern-grid">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;