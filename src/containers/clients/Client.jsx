import React from 'react';
import CompanyLogo from '../../components/companyCard/CompanyLogo';

function Client() {
  return (
    <section className="" id="clients">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div data-aos="fade-up">
          <p className="headline_of_section">
            <h2 className="section_title">
              Major <span>Clients</span>
            </h2>
          </p>
        </div>
        <div className="mt-11 flex h-3/5 flex-wrap justify-center gap-2">
          <CompanyLogo />
        </div>
      </div>
    </section>
  );
}

export default Client;
