import React from 'react';
import About from '../../containers/about/About';
import Services from '../../containers/services/Services';
import Projects from '../../containers/projects/Projects';
import Client from '../../containers/clients/Client';
import Contact from '../../containers/contact/Contact';

function Home() {
  return (
    <div>
      <About />
      <Services />
      <Projects />
      <Client />
      <Contact />
    </div>
  );
}

export default Home;
