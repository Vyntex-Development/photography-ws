import classes from "./BlogPosts.module.css";
import BlogCard from "./BlogPostsCard";
import Link from "next/link";
import { ScrollToTopSvg } from "../svg/svg";
import { useRouter } from "next/router";

const BlogPosts = ({ blogs }) => {
  const router = useRouter();
  const homepage = router.pathname === "/";
  const slicedBlogs = blogs.slice(0, 3);

  return (
    <div className={classes.BlogPosts}>
      <div className="container">
        <div className={classes.Grid}>
          <div className={classes.GridItem}>
            <div className={classes.Heading}>
              <h2>Latest blog posts</h2>
              <Link href="/blog">see more</Link>
            </div>
            <div className={classes.BlogCards}>
              {slicedBlogs.map(
                ({ title, description, id, details, media, slug }) => {
                  return (
                    <BlogCard
                      key={id}
                      title={title}
                      description={description}
                      media={media}
                      readingTime={details.reading_time}
                      author={details.author}
                      date={details.date}
                      slug={slug}
                    />
                  );
                }
              )}
            </div>
          </div>
          {!homepage && (
            <div className={classes.ScrollSvgWrapper}>
              <ScrollToTopSvg />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
