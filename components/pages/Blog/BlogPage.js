import BlogPosts from "../../layout/BlogPosts";
import BlogContent from "./BlogContent";
import classes from "./BlogPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogPage = ({ blog, blogs }) => {
  const { title, description, media, details } = blog;
  const [readingDurationVisualDisplay, setReadingDurationVisualDisplay] =
    useState(0);
  const setDurationHandler = (duration) => {
    setReadingDurationVisualDisplay(duration);
  };

  return (
    <>
      <div className="container">
        <div className={classes.ReadingDuration}>
          <div
            style={{ width: `${readingDurationVisualDisplay}%` }}
            className={classes.Duration}
          ></div>
        </div>
        <div>
          <div className={classes.HeroWrapper}>
            <div className={classes.ArrowDotWrapper}>
              <Link passHref={true} href="/blog">
                <a>
                  <div className={classes.ArrowWrapper}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="blog-arrow"
                      src="/images/blog-arrow.png"
                    ></Image>
                  </div>
                </a>
              </Link>
              <span className={classes.Dot}></span>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={classes.ImageWrapper}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="blog-hero"
                src={media}
              ></Image>
            </div>
          </div>
        </div>
        <BlogContent details={details} setDuration={setDurationHandler} />
      </div>

      <BlogPosts blogs={blogs} />
    </>
  );
};

export default BlogPage;
