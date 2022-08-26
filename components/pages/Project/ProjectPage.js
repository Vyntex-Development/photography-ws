import Hero from "../../layout/Hero";
import Inspiration from "./Inspiration";
import ProjectInfo from "./ProjectInfo";

const ProjectPage = () => {
  return (
    <>
      <Hero title="Classic as Chanel" media="/project-page-hero-img.png" />
      <Inspiration />
      <ProjectInfo />
    </>
  );
};

export default ProjectPage;
