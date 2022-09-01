import HomePage from "../components/pages/Homepage/Homepage";
import { blogs } from "../cms/blogs";
import { projects } from "../cms/projects";

const home = ({ blogs, projects }) => (
  <HomePage blogs={blogs} projects={projects} />
);

export default home;

export async function getStaticProps() {
  return {
    props: {
      blogs,
      projects,
    },
  };
}
