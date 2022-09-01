import Subscribe from "./Subscribe";
import Articles from "./Articles";
import MostTrending from "./MostTrending";

const BlogsPage = ({ blogs }) => {
  return (
    <>
      <MostTrending blogs={blogs} />
      <Articles />
      <Subscribe />
    </>
  );
};

export default BlogsPage;
