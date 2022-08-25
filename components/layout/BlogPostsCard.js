import classes from "./BlogPostsCard.module.css";
import Image from "next/image";
import { ClockSvg } from "../svg/svg";

const BlogCard = ({ title, description, readingTime, author, date, media }) => {
  return (
    <div>
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
    </div>
  );
};

export default BlogCard;
