import React from 'react';

const services = [
  {
    service_title: 'HVAC',
    service_image:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681225/DTS-Aircon/Services/HVAC.jpg',
    services_detail:
      'Chilled water & large air conditioning plant Ductable type systems VRF/VRV systems Ventilation system Split type system',
  },
  {
    service_title: 'Electrical',
    service_image:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Electrical.jpg',
    services_detail:
      'Power Distribution H.T., L.T. & Transformer Internal External Lighting PA System Fire Alarm System',
  },
  {
    service_title: 'Fire Fighting',
    service_image:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Fire%20Fighting.webp',
    services_detail:
      ' Hydrant System Water Cu rtain System Sprinkler System Deluge Fire Protection System FM 200 Suppression System C02 Fire Suppression System',
  },
  {
    service_title: 'Plumbing',
    service_image:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Plumbing.jpg',
    services_detail:
      ' Cold & Hot Water System Hydro Pneumatic System Pumping & Control Syste Water Supply Managemen',
  },
  {
    service_title: 'BMS',
    service_image:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/BMS.jpg',
    services_detail:
      'Building Automation System Mon Itoring & Control of  Services Vite Alarm System Voltage System',
  },
  {
    service_title: 'Solar',
    service_image:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Solar.jpg',
    services_detail: '',
  },
];

function ServiceCard() {
  return (
    <div className="relative grid grid-cols-1 justify-items-center gap-x-2 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(x => (
        <div className="rounded-xl bg-primary py-5 text-center xsm:w-80">
          <h3 className="text-3xl font-bold text-secondary">
            {x.service_title}
          </h3>
          <div
            style={{ backgroundImage: `url(${x.service_image})` }}
            className="mx-auto my-5 aspect-square h-64 rounded-xl border-4 border-secondary bg-cover bg-center"
            data-aos="fade-up"
          />
          <h3>{x.services_detail}</h3>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;
