import ProjectCard from "../components/ProjectCard";
import { ProjectList } from "../utils/ProjectList";

function Projects() {
  return (
    <div id="projects" className="flex flex-col p-32">
      <div className="flex flex-col gap-16">
        <p className="text-white text-6xl font-bold">Projects</p>
        <div className="flex justify-evenly gap-16">
          {ProjectList.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                imgURL={item.imgURL}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
