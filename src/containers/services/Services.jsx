import React from 'react';
import ServiceCard from '../../components/serviceCard/ServiceCard';

function Services() {
  return (
    <section id="services">
      <h2 className="section_title">
        Our <span>Services</span>
      </h2>
      <h3 className="py-6 text-center text-xl text-slate-600">
        Provide following integrated MEP services with design, detailed
        engineering, Procurement, project aranagement, installation, testingt
        commissiontng, approvals from authorities & maintenance.
      </h3>
      <ServiceCard />
    </section>
  );
}

export default Services;
