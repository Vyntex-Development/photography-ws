import Link from "next/link";
import classes from "./Articles.module.css";
import Image from "next/image";
import { ClockSvg } from "../../svg/svg";

const Articles = ({ blogs }) => {
  const lastTreeArticles = blogs.slice(-3);
  return (
    <div className={`${classes.Articles} container`}>
      <h2>Latest Articles</h2>
      <div>
        {lastTreeArticles.map(
          ({ title, description, details, media, slug, id }) => {
            return (
              <div className={classes.Grid} key={id}>
                <div className={classes.Image}>
                  <Image src={media} layout="fill" objectFit="cover"/>
                </div>
                <div className={classes.Title}>
                  <h3>{title}</h3>
                </div>
                <div>
                  <div>
                    <div className={classes.ArticleDetails}>
                      <div>
                        <ClockSvg color="#2f3331" />
                        <p>{details.reading_time} min</p>
                      </div>
                      <p>
                        By <span>Jon Doe</span>
                      </p>
                      <p>20/07/2022</p>
                    </div>
                    <p className={classes.ArticleText}>{description}</p>
                  </div>
                </div>
                <div>
                  <Link href={`/blog/${slug}`}>read more</Link>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Articles;
