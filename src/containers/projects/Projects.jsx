import React, { useEffect, useState, memo } from 'react';
import LeftIcon from '../../../Assets/icons/left-arrow-icon.svg';
import RightIcon from '../../../Assets/icons/right-arrow-icon.svg';

// const projects = {
//   INDIA: [
//     {
//       id: 1,
//       city: 'RAJKOT',
//       projectName: 'AIIMS RAJKOT',
//       projectImg: '',
//     },
//     {
//       id: 2,
//       city: 'JAIPUR',
//       projectName: 'SMS HOSPITAL IPD DIVISION -JAIPUR',
//       projectImg: '',
//     },
//     {
//       id: 3,
//       city: 'ALWAR',
//       projectName: 'MEDICAL COLLEGE AT ALWAR',
//       projectImg: '',
//     },
//   ],
//   OMAN: [
//     {
//       id: 1,
//       city: 'RUWI',
//       projectName: 'Tulip In Hotel , Ruwi',
//       projectImg: '',
//     },
//     {
//       id: 2,
//       city: 'RUWI',
//       projectName: 'Nesto Hyper Market, Ruwi',
//       projectImg: '',
//     },
//   ],
// };

const images = [
  'https://res.cloudinary.com/ddffgfse1/image/upload/v1708857817/DTS-Aircon/Projects/AIIMS_RAJKOT.png',
  'https://res.cloudinary.com/ddffgfse1/image/upload/v1708857817/DTS-Aircon/Projects/AKSHARDHAM_MANDIR-DELHI.jpg',
  'https://res.cloudinary.com/ddffgfse1/image/upload/v1708857817/DTS-Aircon/Projects/Major_Solar_System_Installation.jpg',
  'https://res.cloudinary.com/ddffgfse1/image/upload/v1708857816/DTS-Aircon/Projects/Medical_College_at_Alwar.jpg',
  'https://res.cloudinary.com/ddffgfse1/image/upload/v1708859531/DTS-Aircon/Projects/Tulip_In_Hotel.jpg',
  'https://res.cloudinary.com/ddffgfse1/image/upload/v1708860547/DTS-Aircon/Projects/SMSHOSPITAL.jpg',
  'https://res.cloudinary.com/ddffgfse1/image/upload/e_improve:indoor/DTS-Aircon/Projects/Nesto_HyperMarket.jpg',
  // 'https://res.cloudinary.com/ddffgfse1/image/upload/v1708857816/DTS-Aircon/Projects/SMS_HOSPITAL.jpg',
];
function Projects() {
  const [image, setImage] = useState(0);
  // const length = images.length;
  const preImg = () =>
    image <= 0 ? setImage(images.length - 1) : setImage(image - 1);
  const nextImg = () =>
    image < images.length - 1 ? setImage(image + 1) : setImage(0);

  useEffect(() => {
    const silderclear = setInterval(() => {
      nextImg();
    }, 3000);

    return () => clearInterval(silderclear);
  }, [image]);

  return (
    <section id="projects" className="px-0">
      <h2 className="section_title">
        Our <span>Projects</span>
      </h2>
      {/* <div className="flex flex-col justify-center gap-10 pt-8 text-center font-bold text-black sm:flex-row">
          {projects.INDIA.map(x => (
            <ProjectCard
              key={x.id}
              city={x.city}
              projectName={x.projectName}
              projectImg={x.projectImg}
            />
          ))}
        </div> */}
      <div className="relative mt-5 flex h-72 w-full md:h-[85vh]">
        <img
          src={images[image]}
          alt="Project_images"
          className="h-full w-full object-cover transition-all"
        />
        <button
          type="button"
          aria-label="btn"
          onClick={preImg}
          className="absolute left-0 flex h-full items-center justify-center bg-black bg-opacity-35 hover:bg-opacity-50 md:w-14"
        >
          <LeftIcon className="w-8 fill-white xsm:w-10" />
        </button>
        <button
          type="button"
          aria-label="btn"
          onClick={nextImg}
          className="absolute right-0 flex h-full items-center justify-center bg-black bg-opacity-35 hover:bg-opacity-50 md:w-14"
        >
          <RightIcon className="w-8 fill-white xsm:w-10" />
        </button>
      </div>
    </section>
  );
}

export default memo(Projects);
