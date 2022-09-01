import Projects from "../components/pages/Projects/Projects";
import { projects as allProjects } from "../cms/projects";

const projects = ({ allProjects }) => {
  return (
    <>
      <Projects projects={allProjects} />
    </>
  );
};

export default projects;

export async function getStaticProps() {
  return {
    props: {
      allProjects,
    },
  };
}
