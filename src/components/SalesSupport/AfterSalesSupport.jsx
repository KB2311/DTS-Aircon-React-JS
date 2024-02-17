import React, { memo } from 'react';

// eslint-disable-next-line react/prop-types
function AfterSalesSupport({ title, asimgUrl }) {
  return (
    <div className="mx-auto h-3/4 w-3/4">
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-full bg-primary">
        <div className="relative flex aspect-square h-[90%] items-end justify-center overflow-hidden rounded-full bg-primary-2">
          <img
            className="absolute bottom-0 aspect-square h-[90%] rounded-full"
            src={asimgUrl}
            alt="Operation&Maintenance"
          />
        </div>
      </div>
      <p className="flex h-16 items-center justify-center rounded-xl bg-secondary xsm:text-xl">
        {title}
      </p>
    </div>
  );
}

export default memo(AfterSalesSupport);
