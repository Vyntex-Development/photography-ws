import HomePage from "../components/pages/Homepage/Homepage";
import { blogs } from "../cms/blogs";
import { projects } from "../cms/projects";
import SEO from "../components/SEO/SEO.js";

const home = ({ blogs, projects }) => (
  <>
    <SEO metaTitle="Home" />
    <HomePage blogs={blogs} projects={projects} />
  </>
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
