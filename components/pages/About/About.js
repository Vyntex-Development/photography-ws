import classes from "./About.module.css";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className={classes.AboutHeaderWrapper}>
      <div className={`${classes.Container} container`}>
        <div className={classes.LinksWrapper}>
          <Link passHref={true} href="https://www.facebook.com/">
            <a className={classes.Link}>FACEBOOK</a>
          </Link>
          <Link passHref={true} href="https://www.twitter.com/">
            <a className={classes.Link}>TWITTER</a>
          </Link>
          <Link passHref={true} href="https://www.instagram.com/">
            <a className={classes.Link}>INSTAGRAM</a>
          </Link>
          <Link passHref={true} href="https://www.behance.net/">
            <a className={classes.Link}>BEHANCE</a>
          </Link>
        </div>
      </div>
      <div className={classes.AboutHeader}>
        <Image
          layout="fill"
          objectFit="cover"
          alt="header"
          src="/images/header.png"
          objectPosition="top"
        ></Image>
      </div>
    </div>
  );
};

export default About;
