import classes from "./BlogPosts.module.css";
import BlogCard from "./BlogPostsCard";
import Link from "next/link";

const BlogPosts = () => {
  return (
    <div className={classes.BlogPosts}>
      <div className="container">
        <div className={classes.Grid}>
          <div className={classes.GridItem}>
            <div className={classes.Heading}>
              <h2>Latest blog posts</h2>
              <Link href="/">see more</Link>
            </div>
            <div className={classes.BlogCards}>
              <BlogCard
                title="2023 Thailand Workshop"
                description={`That's B for billions skiing in Aspen private art collection elegance precious upgrade lifestyle`}
                readingTime={4}
                author="Joe Doe"
                date="20/07/2022"
                media="/blog-card-img-1.png"
              />
              <BlogCard
                title="Best camera for portrait photography"
                description={`That's B for billions skiing in Aspen private art collection elegance precious upgrade lifestyle`}
                readingTime={4}
                author="Joe Doe"
                date="20/07/2022"
                media="/blog-card-img-2.png"
              />
              <BlogCard
                title="Aspen private art collection elegance"
                description={`That's B for billions skiing in Aspen private art collection elegance precious upgrade lifestyle`}
                readingTime={4}
                author="Joe Doe"
                date="20/07/2022"
                media="/blog-card-img-3.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
