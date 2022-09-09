import BlogsPage from "../components/pages/Blogs/BlogsPage";
import { blogs } from "../cms/blogs";
import SEO from "../components/SEO/SEO.js";

const blog = ({ blogs }) => (
  <>
    <SEO metaTitle="Blog" />
    <BlogsPage blogs={blogs} />;
  </>
);

export default blog;

export async function getStaticProps() {
  return {
    props: {
      blogs: blogs,
    },
  };
}
