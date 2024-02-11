import React from 'react';

function About() {
  return (
    <section className="min-h-screen" id="about">
      <h2 className="section_title pb-3">
        About <span>Us</span>
      </h2>
      <div className="wrapper flex min-h-60 p-5 justify-center rounded-xl bg-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <p className="rounded-xl p-2 ring-2 ring-secondary">
            {' '}
            To being with we are highly obliged and thankful to{' '}
            <span className="font-bold text-secondary">
              SARDAR DHARAM SINGH DADIALA
            </span>{' '}
            - FOUNDER for his ultimate vision and governance enabling the
            commerce and in where we could be able to contribute our services to
            India and Oman the land of Peace and Harmony.
          </p>
          <p className="rounded-xl p-2 ring-2 ring-secondary">
            {' '}
            On the outset of DTS inception, we were primarily established as a
            small HVAC contractor in the year 2010 during the years we have
            developed our base as an MEP contracting and project management
            company.{' '}
          </p>

          <p className="rounded-xl p-2 ring-2 ring-secondary">
            Over the years in the industry as a contractor and project
            management expertise on various opportunities we have accomplished
            excellence in our core strength as hvac Contractors in the India
            subcontinent and UAE & Sultanate of Oman.{' '}
          </p>
          <p className="rounded-xl p-2 ring-2 ring-secondary">
            We provide exceptional project management and top quality
            workmanship. This professional excellence combined with our personal
            approach has won us a consistently high level of repeat business
            over the past one decade, with a continually expanding our clientele
            of prestigious local and international national organizations.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
