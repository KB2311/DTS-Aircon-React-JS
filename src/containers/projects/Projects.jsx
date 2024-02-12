import React from 'react';


const projects = {
  INDIA: [
    {
      city: 'RAJKOT',
      project_name: 'AIIMS RAJKOT',
      project_img: '',
    },
    {
      city: 'JAIPUR',
      project_name: 'SMS HOSPITAL IPD DIVISION -JAIPUR',
      project_img: '',
    },
    {
      city: 'ALWAR',
      project_name: 'MEDICAL COLLEGE AT ALWAR',
      project_img: '',
    },
  ],
  OMAN: [
    {
      city: 'RUWI',
      project_name: 'Tulip In Hotel , Ruwi',
      project_img: '',
    },
    {
      city: 'RUWI',
      project_name: 'Nesto Hyper Market, Ruwi',
      project_img: '',
    },
  ],
};

function Projects() {
  return (
    <section id="projects">
      <h2 className="section_title">
        Our <span>Projects</span>
      </h2>
      <div className="flex sm:flex-row flex-col justify-center gap-10 pt-8 text-center font-bold text-black">
        {projects.INDIA.map(x => (
          <div className=" rounded-2xl bg-primary">
            <div className="text-2xl">{x.city}</div>
            <div>{x.project_img}</div>
            <div className="text-xl">{x.project_name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
