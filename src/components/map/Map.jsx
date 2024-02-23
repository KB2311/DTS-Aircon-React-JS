import React from 'react';

function Map() {
  return (
    <div className="flex-1 py-2 xsm:p-5 md:my-5">
      <iframe
        className="h-72 w-full rounded-xl ring-2 ring-black md:h-full"
        title="DTS Aircon"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.3679411053033!2d72.57021040434282!3d23.0393336609299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e845fd6c932eb%3A0xc9b826afd043323c!2sPurneshwar%20Chamber!5e0!3m2!1sen!2sin!4v1708012735510!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
