import Projects from "../components/pages/Projects/Projects";
import { projects as allProjects } from "../cms/projects";
import SEO from "../components/SEO/SEO.js";

const projects = ({ allProjects }) => {
  return (
    <>
      <SEO metaTitle="Projects" />
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
