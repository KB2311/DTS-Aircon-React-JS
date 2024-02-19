/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import AfterSalesSupport from '../../components/SalesSupport/AfterSalesSupport';
import ServiceSale from '../../components/SalesSupport/ServiceSale';
import './Service.css';

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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="service_div">
          <h3 className="service_title">HVAC</h3>
          <div
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddffgfse1/image/upload/v1707681225/DTS-Aircon/Services/HVAC.jpg')`,
            }}
            className="service_img"
            data-aos="fade-up"
          />
          <h3 className="service_div_desc">
            <div className="service_desc">
              {' '}
              <span>♦ </span>
              <p>Chilled water & large air conditioning plant</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>Ductable type systems</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>VRF/VRV systems</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>Ventilation system Split type system</p>
            </div>
          </h3>
        </div>
        <div className="service_div">
          <h3 className="service_title">Electrical</h3>
          <div
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Electrical.jpg')`,
            }}
            className="service_img"
            data-aos="fade-up"
          />
          <h3 className="service_div_desc">
            <div className="service_desc">
              {' '}
              <span>♦ </span>
              <p>Power Distribution</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>H.T., L.T. & Transformer</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p> Internal External Lighting</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>PA System</p>
            </div>{' '}
            <div className="service_desc">
              <span>♦ </span>
              <p> Fire Alarm System</p>
            </div>
          </h3>
        </div>
        <div className="service_div">
          <h3 className="service_title">Fire Fighting</h3>
          <div
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Fire%20Fighting.webp')`,
            }}
            className="service_img"
            data-aos="fade-up"
          />
          <h3 className="service_div_desc">
            <div className="service_desc">
              {' '}
              <span>♦ </span>
              <p>Hydrant System</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>Water Curtain System</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>Sprinkler System</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>Deluge Fire Protection System</p>
            </div>{' '}
            <div className="service_desc">
              <span>♦ </span>
              <p>FM 200 Suppression System</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>C02 Fire Suppression System</p>
            </div>
          </h3>
        </div>
        <div className="service_div">
          <h3 className="service_title">Plumbing</h3>
          <div
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Plumbing.jpg')`,
            }}
            className="service_img"
            data-aos="fade-up"
          />
          <h3 className="service_div_desc">
            <div className="service_desc">
              {' '}
              <span>♦ </span>
              <p>Cold & Hot Water System</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>Hydro Pneumatic System</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p> Pumping & Control Syste</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>Water Supply Managemen</p>
            </div>{' '}
          </h3>
        </div>
        <div className="service_div">
          <h3 className="service_title">BMS</h3>
          <div
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/BMS.jpg')`,
            }}
            className="service_img"
            data-aos="fade-up"
          />
          <h3 className="service_div_desc">
            <div className="service_desc">
              {' '}
              <span>♦ </span>
              <p> Building Automation System</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>Mon Itoring & Control of Services</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p> Vite Alarm System</p>
            </div>
            <div className="service_desc">
              <span>♦ </span>
              <p>Voltage System</p>
            </div>{' '}
          </h3>
        </div>
        <div className="service_div">
          <h3 className="service_title">Solar</h3>
          <div
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddffgfse1/image/upload/v1707681224/DTS-Aircon/Services/Solar.jpg')`,
            }}
            className="service_img"
            data-aos="fade-up"
          />
          <h3 className="service_div_desc">
            <div className="service_desc">
              {' '}
              <span>♦ </span>
              <p>
                {' '}
                A comprehensive range of solar modules, charge controllers,
                solar batteries, solar lights, telecommunication power
                supplies,and complete system installation
              </p>
            </div>
          </h3>
        </div>
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
        <h2 className="section_title xsm:mt-20">
          After Sales <span>Support</span>
        </h2>
        <h3 className="pt-6 text-justify text-lg font-bold text-slate-600  sm:text-2xl lg:px-20">
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
        <div className="grid grid-cols-1 items-center justify-items-center gap-y-5 text-center font-bold text-primary xsm:mb-14 xsm:grid-cols-2 lg:grid-cols-4">
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
