import classes from "./MostTrending.module.css";
import BlogCard from "../../layout/BlogPostsCard";
import Image from "next/image";
import { ClockSvg } from "../../svg/svg";

const MostTrending = () => {
  return (
    <div className={classes.MostTrending}>
      <div className="container">
        <h2>Most Trending</h2>
      </div>
      <div className={classes.GridWrapper}>
        <div className={classes.Layer}></div>
        <div className={`${classes.Grid} container`}>
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
          <BlogCard
            title="Best camera for portrait photography"
            description={`That's B for billions skiing in Aspen private art collection elegance precious upgrade lifestyle`}
            readingTime={4}
            author="Joe Doe"
            date="20/07/2022"
            media="/blog-card-img-2.png"
          />
          <BlogCard
            title="2023 Thailand Workshop 2023 Thailand Workshop"
            description={`That's B for billions skiing in Aspen private art collection elegance precious upgrade lifestyle`}
            readingTime={4}
            author="Joe Doe"
            date="20/07/2022"
            media="/blog-card-img-1.png"
          />
          <BlogCard
            title="Aspen private art collection elegance"
            description={`That's B for billions skiing in Aspen private art collection elegance precious upgrade lifestyle`}
            readingTime={4}
            author="Joe Doe"
            date="20/07/2022"
            media="/blog-card-img-3.png"
          />
          <div className={classes.CardBig}>
            <div className={classes.Image}>
              <Image src="/blog-card-img-1.png" layout="fill" />
            </div>
            <h2>Best Camera for Portrait Photography </h2>
            <div className={classes.CardDetailsWrapper}>
              <div>
                <ClockSvg />
                <p>4 min</p>
              </div>
              <p>
                By <span>Joe Doe</span>
              </p>
              <p>20/07/2022</p>
            </div>
            <p>
              Killer classics behind the scenes Kate Moss does Anna Wintour
              smile fall fashion hashtag.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostTrending;
