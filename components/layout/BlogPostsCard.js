import classes from "./BlogPostsCard.module.css";
import Image from "next/image";
import { ClockSvg } from "../svg/svg";
import Link from "next/link";
import { useRouter } from "next/router";

const BlogCard = ({
  title,
  description,
  readingTime,
  author,
  date,
  media,
  slug,
}) => {
  const router = useRouter();

  const isHomepage = router.pathname === "/";
  const isBlogsDynamicPage = router.pathname === "/blogs/[slug]";

  return (
    <div className={classes.Card}>
      <Link href={`/blogs/${slug}`} passHref>
        <a>
          <div className={classes.ImageWrapper}>
            <Image src={media} layout="fill" alt={title} />
          </div>
          <div className={classes.CardContentWrapper}>
            <p
              className={classes.CardTitle}
              style={{
                color: `${
                  isHomepage || isBlogsDynamicPage ? "#012839" : "#DFDFE0"
                }`,
              }}
            >
              {title}
            </p>
            <p className={classes.CardDescription}>{description}</p>
            <div className={classes.CardDetailsWrapper}>
              <div>
                <ClockSvg
                  color={
                    isHomepage || isBlogsDynamicPage ? "#808080" : "#DFDFE0"
                  }
                />
                <p
                  style={{
                    color: `${
                      isHomepage || isBlogsDynamicPage ? "#808080" : "#DFDFE0"
                    }`,
                  }}
                >
                  {readingTime} min
                </p>
              </div>
              <p
                style={{
                  color: `${
                    isHomepage || isBlogsDynamicPage ? "#808080" : "#DFDFE0"
                  }`,
                }}
              >
                By <span>{author}</span>
              </p>
              <p
                style={{
                  color: `${
                    isHomepage || isBlogsDynamicPage ? "#808080" : "#DFDFE0"
                  }`,
                }}
              >
                {date}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
