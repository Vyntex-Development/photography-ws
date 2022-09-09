import ProjectPage from "../../components/pages/Project/ProjectPage";
import { projects } from "../../cms/projects";
import SEO from "../../components/SEO/SEO";

const project = ({ project, projects }) => (
  <>
    <SEO metaTitle={project.title} />
    <ProjectPage project={project} projects={projects} />
  </>
);

export default project;

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const project = projects.find((project) => project.slug === slug);
  return {
    props: { project: project, projects: projects },
  };
}

export async function getStaticPaths() {
  const paths = projects.map((project) => {
    return { params: { slug: project.slug } };
  });

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}
