import React from 'react';

function ProjectCard({ city, projectName, projectImg }) {
  return (
    <div className=" rounded-2xl bg-primary p-3 text-white">
      <div className="text-2xl">{city}</div>
      <div>{projectName}</div>
      <div className="text-xl">{projectImg}</div>
    </div>
  );
}

export default ProjectCard;
