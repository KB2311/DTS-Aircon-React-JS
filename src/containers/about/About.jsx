import React from 'react';
import MissionIcon from '../../../Assets/icons/Mission_icon.svg';
import EyeIcon from '../../../Assets/icons/eye-icon.svg';
import RocketIcon from '../../../Assets/icons/rocket-icon.svg';
import './About.css';

function About() {
  return (
    <section className="min-h-screen" id="about">
      <h2 className="section_title pb-3">
        About <span>Us</span>
      </h2>
      <div className="pt-5">
        <div className="grid grid-cols-1 justify-center gap-5 rounded-xl bg-primary p-5 text-xl md:grid-cols-2">
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
        <div className="mx-auto grid grid-cols-1 gap-20 px-8 pt-20  font-semibold text-slate-600 lg:grid-cols-3 lg:gap-5">
          <div className="icon_div">
            <div className="icon_svg">
              <MissionIcon className="pl-2" height={90} />
            </div>
            <p className="">
              Our Core Values are guiding principles that transcend the effects
              of time or outside influence. They demonstrate the characteristics
              we admire, that we measure people by, and that forms the basis of
              our staffing decisions
            </p>
          </div>
          <div className="icon_div">
            <div className="icon_svg">
              <EyeIcon height={60} className="fill-red-500" />
            </div>
            <p>
              <span className="text-xl font-bold">“</span> Leadership through
              innovative and responsible solutions.
              <span className="text-xl font-bold">”</span> We always strive to
              be recognized as a leader in the market place for our creativity
              and our ability to provide solutions that maximize long-term
              value. We excel at complex, value driven projects delivered in a
              team environment.
            </p>
          </div>
          <div className="icon_div">
            <div className="icon_svg">
              <RocketIcon height={60} className="fill-red-500" />
            </div>
            <p className="text-xl lg:pt-5">
              Value driven Customer loyalty Challenging projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
