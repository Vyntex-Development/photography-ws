import Hero from "../../layout/Hero";
import Inspiration from "./Inspiration";
import ProjectInfo from "./ProjectInfo";

const ProjectPage = ({ projects, project }) => {
  const { media, title, details } = project;
  const { client, location, time } = details;
  return (
    <>
      <Hero
        title={title}
        media={media}
        client={client}
        location={location}
        time={time}
      />
      <Inspiration />
      <ProjectInfo project={project} projects={projects} />
    </>
  );
};

export default ProjectPage;
