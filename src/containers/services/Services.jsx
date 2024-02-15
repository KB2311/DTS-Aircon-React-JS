import React, { memo } from 'react';
import ServiceCard from '../../components/serviceCard/ServiceCard';

const services = [
  {
    id: 1,
    serviceTitle: 'HVAC',
    serviceImage:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681225/DTS-Aircon/Services/HVAC.jpg',
    servicesDetail:
      'Chilled water & large air conditioning plant Ductable type systems VRF/VRV systems Ventilation system Split type system',
  },
  {
    id: 2,
    serviceTitle: 'Electrical',
    serviceImage:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Electrical.jpg',
    servicesDetail:
      'Power Distribution H.T., L.T. & Transformer Internal External Lighting PA System Fire Alarm System',
  },
  {
    id: 3,
    serviceTitle: 'Fire Fighting',
    serviceImage:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Fire%20Fighting.webp',
    servicesDetail:
      ' Hydrant System Water Curtain System Sprinkler System Deluge Fire Protection System FM 200 Suppression System C02 Fire Suppression System',
  },
  {
    id: 4,
    serviceTitle: 'Plumbing',
    serviceImage:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Plumbing.jpg',
    servicesDetail:
      ' Cold & Hot Water System Hydro Pneumatic System Pumping & Control Syste Water Supply Managemen',
  },
  {
    id: 5,
    serviceTitle: 'BMS',
    serviceImage:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/BMS.jpg',
    servicesDetail:
      'Building Automation System Mon Itoring & Control of  Services Vite Alarm System Voltage System',
  },
  {
    id: 6,
    serviceTitle: 'Solar',
    serviceImage:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Solar.jpg',
    servicesDetail:
      'A comprehensive range of solar modules, charge controllers,solar batteries, solar lights, telecommunication power supplies,and complete system installation',
  },
];

function Services() {
  return (
    <section id="services">
      <h2 className="section_title">
        Our <span>Services</span>
      </h2>
      <h3 className="py-6 text-center text-lg font-bold text-slate-600 sm:text-2xl  md:text-justify lg:px-20">
        Provide following integrated MEP services with design, detailed
        engineering, Procurement, project aranagement, installation, testingt
        commissiontng, approvals from authorities & maintenance.
      </h3>
      <div className="relative grid grid-cols-1 justify-items-center gap-x-2 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(x => (
          <ServiceCard
            key={x.id}
            serviceTitle={x.serviceTitle}
            serviceImage={x.serviceImage}
            servicesDetail={x.servicesDetail}
          />
        ))}
      </div>
      <div className="">
        <h2 className="section_title">
          After Sales <span>Support</span>
        </h2>
        <h3 className="center py-6 text-justify text-lg font-bold text-slate-600  sm:text-2xl lg:px-20">
          We have dedicated department to provide best after sales support our
          customers. We are constantll working for improvement of quality
          service by providing regular training to service engineers and giving
          them world class tools.
        </h3>
        <h3 className="py-6 text-center text-lg font-bold text-slate-600 sm:text-2xl  md:text-justify lg:px-20">
          We are serving in hotels, hospitals, industry, malls, residences.
          educations segments with providing HVAC, Fire, Electrical, Plumbing &
          BMS services with following method.
        </h3>
        <div className="grid-cols-2 items-center justify-items-center text-center font-bold text-primary xsm:grid lg:grid-cols-4">
          <div className="h-3/4 w-3/4">
            <div className="aspect-square overflow-hidden rounded-full">
              <img
                className="h-full min-w-fit"
                src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707977276/DTS-Aircon/Services/Oncallbasis.avif"
                alt="OnCallBasis"
              />
            </div>
            <p>On Call Basis</p>
          </div>
          <div className="h-3/4 w-3/4">
            <div className="aspect-square overflow-hidden rounded-full">
              <img
                className="h-full min-w-fit"
                src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707977275/DTS-Aircon/Services/Annualmaintenance.jpg"
                alt="AnnualContract"
              />
            </div>
            <p>Annual Maintenance Contract</p>
          </div>
          <div className="h-3/4 w-3/4">
            <div className="aspect-square overflow-hidden rounded-full">
              <img
                className="h-full min-w-fit"
                src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707977275/DTS-Aircon/Services/Comprehensive.webp"
                alt="comprehensiveContract"
              />
            </div>
            <p>Comprehensive Annual Maintenance Contract</p>
          </div>
          <div className="h-3/4 w-3/4">
            <div className="aspect-square overflow-hidden rounded-full">
              <img
                className="h-full min-w-fit"
                src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707977276/DTS-Aircon/Services/Operation.png"
                alt="Operation&Maintenance"
              />
            </div>
            <p>Operation & Maintenance Contract</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Services);
