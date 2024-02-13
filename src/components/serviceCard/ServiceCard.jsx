import React from 'react';

// eslint-disable-next-line react/prop-types
function ServiceCard({ serviceTitle, serviceImage, servicesDetail }) {
  return (
    <div className="rounded-xl bg-primary py-5 text-center xsm:w-80">
      <h3 className="text-3xl font-bold text-secondary">{serviceTitle}</h3>
      <div
        style={{ backgroundImage: `url(${serviceImage})` }}
        className="mx-auto my-5 aspect-square h-64 rounded-xl border-4 border-secondary bg-cover bg-center"
        data-aos="fade-up"
      />
      <h3>{servicesDetail}</h3>
    </div>
  );
}

export default ServiceCard;
