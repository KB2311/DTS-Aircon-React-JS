import React from 'react';
import About from '../../containers/about';
import Services from '../../containers/services';
import Projects from '../../containers/projects';
import Client from '../../containers/clients';
import Contact from '../../containers/contact';

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
