import Link from "next/link";
import classes from "./Articles.module.css";
import Image from "next/image";
import { ClockSvg } from "../../svg/svg";

const Articles = () => {
  return (
    <div className={`${classes.Articles} container`}>
      <h2>Latest Articles</h2>
      <div>
        <div className={classes.Grid}>
          <div className={classes.Image}>
            <Image src="/article-img-1.png" layout="fill" />
          </div>
          <div className={classes.Title}>
            <h3>Best Camera for Portrait Photography</h3>
          </div>
          <div>
            <div>
              <div className={classes.ArticleDetails}>
                <div>
                  <ClockSvg /> <p>4 min</p>
                </div>
                <p>
                  By <span>Jon Doe</span>
                </p>
                <p>20/07/2022</p>
              </div>
              <p className={classes.ArticleText}>
                Hand crafted kidnap insurance Monaco space tourist upgrade
                lifestyle the playboy mansion the home in the Hamptons bespoke
                Maybachs on bachs on bachs on bachs
              </p>
            </div>
          </div>
          <div>
            <Link href="/">read more</Link>
          </div>
        </div>
        <div className={classes.Grid}>
          <div className={classes.Image}>
            <Image src="/article-img-2.png" layout="fill" />
          </div>
          <div className={classes.Title}>
            <h3>Aspen private art collection elegance</h3>
          </div>
          <div>
            <div>
              <div className={classes.ArticleDetails}>
                <div>
                  <ClockSvg /> <p>4 min</p>
                </div>
                <p>
                  By <span>Jon Doe</span>
                </p>
                <p>20/07/2022</p>
              </div>
              <p className={classes.ArticleText}>
                Hand crafted kidnap insurance Monaco space tourist upgrade
                lifestyle the playboy mansion the home in the Hamptons bespoke
                Maybachs on bachs on bachs on bachs
              </p>
            </div>
          </div>
          <div>
            <Link href="/">read more</Link>
          </div>
        </div>
        <div className={classes.Grid}>
          <div className={classes.Image}>
            <Image src="/article-img-3.png" layout="fill" />
          </div>
          <div className={classes.Title}>
            <h3>2023 Thailand Workshop</h3>
          </div>
          <div>
            <div>
              <div className={classes.ArticleDetails}>
                <div>
                  <ClockSvg /> <p>4 min</p>
                </div>
                <p>
                  By <span>Jon Doe</span>
                </p>
                <p>20/07/2022</p>
              </div>
              <p className={classes.ArticleText}>
                Hand crafted kidnap insurance Monaco space tourist upgrade
                lifestyle the playboy mansion the home in the Hamptons bespoke
                Maybachs on bachs on bachs on bachs
              </p>
            </div>
          </div>
          <div>
            <Link href="/">read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
