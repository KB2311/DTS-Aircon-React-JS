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
      ' Hydrant System Water Cu rtain System Sprinkler System Deluge Fire Protection System FM 200 Suppression System C02 Fire Suppression System',
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
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, soluta!',
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
    </section>
  );
}

export default memo(Services);
