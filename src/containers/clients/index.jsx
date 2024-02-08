import React from 'react';
import './style.css';
import CompanyLogo from '../../components/companyLogo';

function Client() {
  return (
    <section className="" id="clients">
      <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center">
        <div className="border-b-[3px] border-sky-500" data-aos="fade-up">
          <p className="headline_of_section text-2xl font-semibold">
            Major Clients
          </p>
        </div>
        <div className="company_logo">
          <CompanyLogo />
        </div>
      </div>
    </section>
  );
}

export default Client;
