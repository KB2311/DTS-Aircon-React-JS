import React, { memo } from 'react';
import CompanyLogo from '../../components/companyCard/CompanyLogo';

const logo = [
  {
    id: 1,
    clientName: 'Motor Harley Davidson logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243248/DTS-Aircon/Clients/1._Motor_Harley-Davidson_logo_hzjefc.png',
  },
  {
    id: 2,
    clientName: 'MMTC PAMP logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243251/DTS-Aircon/Clients/2._MMTC-PAMP_logo_izjcuw.png',
  },
  {
    id: 3,
    clientName: 'ITC Limited logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243255/DTS-Aircon/Clients/3._ITC_Limited_logo_luyjmi.png',
  },
  {
    id: 4,
    clientName: 'texsa logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243258/DTS-Aircon/Clients/4._texsa_logo_bi9t3s.png',
  },
  {
    id: 5,
    clientName: 'Sterlite Logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243261/DTS-Aircon/Clients/5._Sterlite_Logo_xc1uvp.png',
  },
  {
    id: 6,
    clientName: 'Hero logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243265/DTS-Aircon/Clients/6._Hero_logo_ow4ofz.png',
  },
  {
    id: 7,
    clientName: 'Hero Cycles logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243268/DTS-Aircon/Clients/7._Hero-Cycles-logo_rovrq5.png',
  },
  {
    id: 8,
    clientName: 'Hindalco Industries logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243272/DTS-Aircon/Clients/8._Hindalco-Industries-logo_fth7es.png',
  },
  {
    id: 9,
    clientName: 'FEDERAL MOGUL logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243279/DTS-Aircon/Clients/9._FEDERAL_MOGUL_logo_yugdru.png',
  },
  {
    id: 10,
    clientName: 'Punj Lloyd group logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243282/DTS-Aircon/Clients/10._Punj_Lloyd_group_logo_eujn4w.png',
  },
  {
    id: 11,
    clientName: 'Competent automobiles logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243285/DTS-Aircon/Clients/11._Competent_automobiles_logo_ewtnpy.png',
  },
  {
    id: 12,
    clientName: 'iNDOSOLAR logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243288/DTS-Aircon/Clients/12._iNDOSOLAR_logo_hxph3y.png',
  },
  {
    id: 13,
    clientName: 'Uop - a honeywell company logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243292/DTS-Aircon/Clients/13._Uop_-_a_honeywell_company_logo_alwtuh.png',
  },
  {
    id: 14,
    clientName: 'EICHER logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243295/DTS-Aircon/Clients/14._EICHER_logo_rfvrxt.png',
  },
  {
    id: 15,
    clientName: 'Bajaj logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243299/DTS-Aircon/Clients/15._Bajaj_logo_ekaknv.png',
  },
  {
    id: 16,
    clientName: 'CATERPILLAR logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243302/DTS-Aircon/Clients/16._CATERPILLAR_logo_s8qmzf.png',
  },
  {
    id: 17,
    clientName: 'Lufthansa logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243305/DTS-Aircon/Clients/17._Lufthansa_logo_hu2zd0.png',
  },
  {
    id: 18,
    clientName: 'Hero Honda logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243309/DTS-Aircon/Clients/18._Hero_Honda_logo_kgjrkg.png',
  },
  {
    id: 19,
    clientName: 'Ashoka l logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243312/DTS-Aircon/Clients/19._Ashoka_l_logo_ubjrra.png',
  },
  {
    id: 20,
    clientName: 'CAE logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243361/DTS-Aircon/Clients/21._CAE_logo_tuqzfi.png',
  },
  {
    id: 21,
    clientName: 'GODREJ logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243318/DTS-Aircon/Clients/22._GODREJ_logo_k6vdwg.png',
  },
  {
    id: 22,
    clientName: 'HP-invent logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243321/DTS-Aircon/Clients/23._HP-invent_logo_tvlqnx.png',
  },
  {
    id: 23,
    clientName: 'tata logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243362/DTS-Aircon/Clients/24._tata_logo_qlka9c.png',
  },
  {
    id: 24,
    clientName: 'Satyamev Jayte logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243363/DTS-Aircon/Clients/25._Satyamev_Jayte_logo_ohwrjn.png',
  },
  {
    id: 25,
    clientName: 'Infosys logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243363/DTS-Aircon/Clients/26._Infosys_logo_ge3gau.png',
  },
  {
    id: 26,
    clientName: 'asianpaints logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243364/DTS-Aircon/Clients/27._asianpaints_logo_qxxpmc.png',
  },
  {
    id: 27,
    clientName: 'ABB logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243364/DTS-Aircon/Clients/28._ABB_logo_vmdvk0.png',
  },
  {
    id: 28,
    clientName: 'Coca-cola logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243364/DTS-Aircon/Clients/29._Coca-cola_logo_smjqwu.png',
  },
  {
    id: 29,
    clientName: 'GM Motors',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243364/DTS-Aircon/Clients/30._GM_Motors_cxhytm.png',
  },
  {
    id: 30,
    clientName: 'TTK logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243365/DTS-Aircon/Clients/31._TTK_logo_twoiqu.png',
  },
  {
    id: 31,
    clientName: 'GD Housing logo',
    clientImg:
      'https://res.cloudinary.com/ddffgfse1/image/upload/v1707243365/DTS-Aircon/Clients/32._GD_Housing_logo_vfdlae.png',
  },
];

function Client() {
  return (
    <section className="" id="clients">
      <div className="mx-auto flex max-w-7xl flex-col">
        <div data-aos="fade-up">
          <p className="headline_of_section">
            <h2 className="section_title">
              Major <span>Clients</span>
            </h2>
          </p>
        </div>
        <div className="mt-11 flex h-3/5 flex-wrap justify-center gap-2">
          {logo.map(x => (
            <CompanyLogo
              key={x.id}
              clientName={x.clientName}
              clientImg={x.clientImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Client);
