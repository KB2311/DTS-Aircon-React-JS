import React, { memo } from 'react';
import About from '../../containers/about/About';
import Services from '../../containers/services/Services';
import Projects from '../../containers/projects/Projects';
import Client from '../../containers/clients/Client';
import Hero from '../../containers/hero/Hero';

function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Client />
    </main>
  );
}

export default memo(Home);
