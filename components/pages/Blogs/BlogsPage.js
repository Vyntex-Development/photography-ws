import Subscribe from "./Subscribe";
import Articles from "./Articles";
import MostTrending from "./MostTrending";

const BlogsPage = ({ blogs }) => {
  return (
    <>
      <MostTrending blogs={blogs} />
      <Articles blogs={blogs} />
      <Subscribe />
    </>
  );
};

export default BlogsPage;
