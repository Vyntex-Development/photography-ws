import BlogPage from "../../components/pages/Blog/BlogPage";
import { blogs } from "../../cms/blogs";

const blog = ({ blog, blogs }) => <BlogPage blog={blog} blogs={blogs} />;

export default blog;

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const blog = blogs.find((blog) => blog.slug === slug);
  return {
    props: { blog: blog, blogs: blogs },
  };
}

export async function getStaticPaths() {
  const paths = blogs.map((blog) => {
    return { params: { slug: blog.slug } };
  });

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}
