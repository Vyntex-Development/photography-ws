import classes from "./BlogPostsCard.module.css";
import Image from "next/image";
import { ClockSvg } from "../svg/svg";
import Link from "next/link";

const BlogCard = ({
  title,
  description,
  readingTime,
  author,
  date,
  media,
  slug,
}) => {
  console.log(slug);
  return (
    <div>
      <Link href={`/blogs/${slug}`} passHref>
        <a>
          <div className={classes.ImageWrapper}>
            <Image src={media} layout="fill" />
          </div>
          <div className={classes.CardContentWrapper}>
            <p className={classes.CardTitle}>{title}</p>
            <p className={classes.CardDescription}>{description}</p>
            <div className={classes.CardDetailsWrapper}>
              <div>
                <ClockSvg />
                <p>{readingTime} min</p>
              </div>
              <p>
                By <span>{author}</span>
              </p>
              <p>{date}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
