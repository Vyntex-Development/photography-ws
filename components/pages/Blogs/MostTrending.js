import classes from "./MostTrending.module.css";
import BlogCard from "../../layout/BlogPostsCard";
import Image from "next/image";
import { ClockSvg } from "../../svg/svg";
import Link from "next/link";

const MostTrending = ({ blogs }) => {
  const slicedBlogs = blogs.slice(0, 5);
  const firstBlog = blogs.slice(5, 6)[0];
  return (
    <div className={classes.MostTrending}>
      <div className="container">
        <h2>Most Trending</h2>
      </div>
      <div className={classes.GridWrapper}>
        <div className={classes.Layer}></div>
        <div className={`${classes.Grid} container`}>
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
          <div className={classes.CardBig}>
            <Link href={`/blog/${firstBlog.slug}`} passHref>
              <a href="">
                <div className={classes.Image}>
                  <Image src="/blog-card-img-1.png" layout="fill" />
                </div>
                <h2>{firstBlog.title}</h2>
                <div className={classes.CardDetailsWrapper}>
                  <div>
                    <ClockSvg color="#DFDFE0" />
                    <p>{firstBlog.details.reading_time} min</p>
                  </div>
                  <p>
                    By <span>{firstBlog.details.author}</span>
                  </p>
                  <p>{firstBlog.details.date}</p>
                </div>
                <p>{firstBlog.description}</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostTrending;
