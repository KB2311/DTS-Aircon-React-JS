import React, { useEffect, useState, memo } from 'react';
// import ProjectCard from '../../components/projectCard/ProjectCard';
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
  'https://5.imimg.com/data5/SELLER/Default/2023/4/303321244/FC/VV/WB/135658225/box-cricket-ground.jpeg',
  'https://www.kreedon.com/wp-content/uploads/2019/06/DSC_5239-1024x684-1024x516.jpg.webp',
  'https://5.imimg.com/data5/ANDROID/Default/2021/1/MJ/HS/RL/118190257/product-jpeg.jpg',
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
      <div className="relative mt-5 flex h-72 w-full md:h-[75vh]">
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
