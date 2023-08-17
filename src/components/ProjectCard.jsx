import React from "react";

function ProjectCard({ imgURL, title }) {
  return (
    <div className="flex w-1/3 flex-col items-centre bg-neutral-700 shadow-md border  rounded-md p-4">
      <div className="flex justify-start items-center">
        <img src={imgURL} alt="card logo" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-3xl text-white font-normal underline">{title}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
