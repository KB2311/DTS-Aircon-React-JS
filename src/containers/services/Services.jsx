/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import AfterSalesSupport from '../../components/SalesSupport/AfterSalesSupport';
import ServiceSale from '../../components/SalesSupport/ServiceSale';

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

const SaleServiceProduct = [
  {
    id: 1,
    ssptitle: 'Cassette AC',
    sspimgUrl:
      'https://res.cloudinary.com/ddffgfse1/image/upload/ar_1:1,c_crop/v1707992743/DTS-Aircon/Services/CassetteAc.webp',
  },
  {
    id: 2,
    ssptitle: 'Ductable type systems',
    sspimgUrl:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707992743/DTS-Aircon/Services/DuctableSystem.avif',
  },
  {
    id: 3,
    ssptitle: 'VRF/VRV systems',
    sspimgUrl:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707994728/DTS-Aircon/Services/VRFVRV_System.png',
  },
  {
    id: 4,
    ssptitle: 'Split type system',
    sspimgUrl:
      'https://res.cloudinary.com/ddffgfse1/image/upload/ar_1:1,c_crop/v1707992743/DTS-Aircon/Services/SplitSystem.png',
  },
];

const afterSales = [
  {
    id: 1,
    title: 'On Call Basis',
    asimgUrl:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707977276/DTS-Aircon/Services/Oncallbasis.avif',
  },
  {
    id: 2,
    title: 'Annual Maintenance Contract',
    asimgUrl:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707977275/DTS-Aircon/Services/Annualmaintenance.jpg',
  },
  {
    id: 3,
    title: 'Comprehensive Annual Maintenance Contract',
    asimgUrl:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707977275/DTS-Aircon/Services/Comprehensive.webp',
  },
  {
    id: 4,
    title: 'Operation & Maintenance Contract',
    asimgUrl:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707977276/DTS-Aircon/Services/Operation.png',
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

      <div className="mt-10 bg-primary p-5">
        <div className="bg-primary-2">
          <h3 className=" text-center text-3xl font-bold">
            SALES AND SERVICE OF UNITRY PRODUCT
          </h3>
        </div>
      </div>
      <div className="mb-10 grid grid-cols-1 items-center justify-items-center gap-y-5 text-center font-bold text-primary xsm:grid-cols-2 lg:grid-cols-4">
        {SaleServiceProduct.map(x => (
          <ServiceSale key={x.id} title={x.ssptitle} sspimgUrl={x.sspimgUrl} />
        ))}
      </div>

      <div>
        <h2 className="section_title">
          After Sales <span>Support</span>
        </h2>
        <h3 className="py-6 text-justify text-lg font-bold text-slate-600  sm:text-2xl lg:px-20">
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
        <div className="grid grid-cols-1 items-center justify-items-center gap-y-5 text-center font-bold text-primary xsm:grid-cols-2 lg:grid-cols-4">
          {afterSales.map(x => (
            <AfterSalesSupport
              key={x.id}
              title={x.title}
              asimgUrl={x.asimgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Services);
