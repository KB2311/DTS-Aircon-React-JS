import React, { memo } from 'react';
import ProjectCard from '../../components/projectCard/ProjectCard';

const projects = {
  INDIA: [
    {
      id: 1,
      city: 'RAJKOT',
      projectName: 'AIIMS RAJKOT',
      projectImg: '',
    },
    {
      id: 2,
      city: 'JAIPUR',
      projectName: 'SMS HOSPITAL IPD DIVISION -JAIPUR',
      projectImg: '',
    },
    {
      id: 3,
      city: 'ALWAR',
      projectName: 'MEDICAL COLLEGE AT ALWAR',
      projectImg: '',
    },
  ],
  OMAN: [
    {
      id: 1,
      city: 'RUWI',
      projectName: 'Tulip In Hotel , Ruwi',
      projectImg: '',
    },
    {
      id: 2,
      city: 'RUWI',
      projectName: 'Nesto Hyper Market, Ruwi',
      projectImg: '',
    },
  ],
};

function Projects() {
  return (
    <section id="projects">
      <h2 className="section_title">
        Our <span>Projects</span>
      </h2>
      <div className="flex flex-col justify-center gap-10 pt-8 text-center font-bold text-black sm:flex-row">
        {projects.INDIA.map(x => (
          <ProjectCard
            key={x.id}
            city={x.city}
            projectName={x.projectName}
            projectImg={x.projectImg}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(Projects);
