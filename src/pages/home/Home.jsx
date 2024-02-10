import React from 'react';
import About from '../../containers/about/About';
import Services from '../../containers/services/Services';
import Projects from '../../containers/projects/Projects';
import Client from '../../containers/clients/Client';
import Contact from '../../containers/contact/Contact';
import Hero from '../../containers/hero/Hero';

function Home() {
  return (
    <main className="px-container">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Client />
      <Contact />
    </main>
  );
}

export default Home;
