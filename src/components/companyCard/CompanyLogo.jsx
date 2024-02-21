/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import './CompanyLogo.css';

function CompanyLogo({ clientName, clientImg }) {
  return (
    <div className="hexagon">
      <img src={clientImg} alt={clientName} data-aos="fade-up" />
    </div>
  );
}

export default memo(CompanyLogo);
