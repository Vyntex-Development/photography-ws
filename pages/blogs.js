import BlogsPage from "../components/pages/Blogs/BlogsPage";
import { blogs } from "../cms/blogs";

const blog = ({ blogs }) => <BlogsPage blogs={blogs} />;

export default blog;

export async function getStaticProps() {
  return {
    props: {
      blogs: blogs,
    }, // will be passed to the page component as props
  };
}
