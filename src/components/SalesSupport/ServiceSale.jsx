import React, { memo } from 'react';

// eslint-disable-next-line react/prop-types
function ServiceSale({ title, sspimgUrl }) {
  return (
    <div className="mx-auto h-3/4 w-3/4">
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-primary">
        <div className="relative flex aspect-square h-[90%] items-end justify-center overflow-hidden rounded-xl bg-primary-2">
          <img
            className="absolute bottom-0 h-[93%] w-fit rounded-xl"
            src={sspimgUrl}
            alt={title}
          />
        </div>
      </div>
      <p className="rounded-xl bg-secondary xsm:text-xl">{title}</p>
    </div>
  );
}

export default memo(ServiceSale);
