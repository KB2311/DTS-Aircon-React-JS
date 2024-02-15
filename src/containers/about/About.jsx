import React, { memo } from 'react';
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
      <div className="pt-5 text-justify">
        <div className="grid grid-cols-1 justify-center gap-5 rounded-xl  bg-primary p-5 text-xl xsm:gap-8 xsm:p-8 md:grid-cols-2">
          <p className=" rounded-xl p-2 ring-2 ring-secondary">
            {' '}
            To being with we are highly obliged and thankful to{' '}
            <span className="font-bold text-secondary">
              SARDAR DHARAM SINGH DADIALA
            </span>{' '}
            - FOUNDER for his ultimate vision and governance enabling the
            commerce and in where we could be able to contribute our services to
            India and Oman the land of Peace and Harmony.
          </p>
          <p className="flex items-center rounded-xl p-2 ring-2 ring-secondary">
            {' '}
            On the outset of DTS inception, we were primarily established as a
            small HVAC contractor in the year 2010 during the years we have
            developed our base as an MEP contracting and project management
            company.{' '}
          </p>
          <p className="flex items-center rounded-xl p-2 ring-2 ring-secondary">
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
        <div className="mx-auto grid grid-cols-1 gap-24 pt-20 font-semibold  text-slate-600 xsm:px-2 lg:grid-cols-3 lg:gap-5">
          <div className="icon_div">
            <div className="icon_svg">
              <MissionIcon className="pl-2" height={90} />
            </div>
            <p className="pb-3 xsm:pt-3">
              Our Core Values are guiding principles that transcend the effects
              of time or outside influence. They demonstrate the characteristics
              we admire, that we measure people by, and that forms the basis of
              our staffing decisions
            </p>
            <div className="icon_title">Values</div>
          </div>
          <div className="icon_div">
            <div className="icon_svg">
              <EyeIcon height={60} className="fill-red-500" />
            </div>
            <p className="pb-3 xsm:pt-3">
              <span className="text-xl font-bold">“</span>
              <b> Leadership through innovative and responsible solutions.</b>
              <span className="text-xl font-bold"> ”</span> We always strive to
              be recognized as a leader in the market place for our creativity
              and our ability to provide solutions that maximize long-term
              value. We excel at complex, value driven projects delivered in a
              team environment.
            </p>
            <div className="icon_title">Visions</div>
          </div>
          <div className="icon_div">
            <div className="icon_svg">
              <RocketIcon height={60} className="fill-red-500" />
            </div>
            <p className="pb-3 text-xl lg:py-5">
              Value driven Customer loyalty Challenging projects
            </p>
            <div className="icon_title">Mission</div>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col gap-10 pt-20 ">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-2 px-1 pb-5 text-slate-700 md:w-[25%] lg:pb-0">
            <img
              className="aspect-square w-40 rounded-full ring-4 ring-secondary xsm:w-60"
              src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707654734/DTS-Aircon/rxfvniylmuk2o12nyg58.png"
              alt=""
            />
            <div className="rounded-lg bg-primary p-1 text-center font-bold text-white">
              <p>Paramjeet Singh Dadiala</p>
              <p>Co-Founder</p>
            </div>
          </div>
          <div className="rounded-xl p-4  text-justify text-sm text-slate-700 ring-4 ring-primary xsm:text-xl  lg:w-[75%]">
            <p className="pb-5">
              {' '}
              <b>Paramjeet Singh Dadiala</b>, a Mechanical Engineer by
              profession is the Co-Founder of{' '}
              <b>
                {' '}
                Dadiala Technical Services (DTS AIRCONDITIONING SYSTEMS LLP )
              </b>
              , has nearly two decades experience in <b>HVAC & MEP</b> projects
              in the field of air conditioning & refrigeration.{' '}
            </p>
            <p>
              Paramjeet Singh Dadiala is widely recognized across the{' '}
              <b>India</b> and <b>Sultanate of Oman</b> for his path-breaking
              and visionary contributions to the construction industry of Oman
              through his prior dedicated role as an “Assistant Sales Manager”
              and later as “Divisional Manager- Project & Engineering Division”
              with Hitachi Home Life Science, Fedders International, Eros
              Electricals, Oman Trading Establishment, Suhail Bahwan Group &
              erstwhile Moosa Abdul Rehman Group & Al Hashar group respectively.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="order-2 rounded-xl p-4 text-justify text-sm text-slate-700 ring-4 ring-primary xsm:text-xl lg:order-1  lg:w-[75%]">
            <p className="py-2">
              <b>Jigesh Hirani</b> a B.Sc Chemistry by Profession is the
              Co-Founder of
              <b> Dadiala Technical Services</b>. He is widely recognised across
              the india for path breaking and visionary contrbutions to the
              construction industry and facility management services last{' '}
              <b>15 Years</b>.
            </p>{' '}
            <p className="pt-4">
              His responsible for the growth, stability, direction and daily
              opration of the Business and customer care.
            </p>
          </div>
          <div className="order-1 mx-1 flex flex-col items-center justify-center gap-2 px-1 pb-5 text-slate-700 md:w-[25%] lg:pb-0">
            <img
              className="aspect-square w-40 rounded-full ring-4 ring-secondary xsm:w-60 "
              src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707654734/DTS-Aircon/rxfvniylmuk2o12nyg58.png"
              alt=""
            />
            <div className="w-40 rounded-lg bg-primary p-1 text-center font-bold text-white">
              <p>Jigesh Hirani</p>
              <p>Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
