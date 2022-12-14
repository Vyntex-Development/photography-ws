import Image from "next/image";
import Link from "next/link";
import classes from "./Hero.module.css";
import { ArrowBackSvg } from "../svg/svg";
import { useRouter } from "next/router";

const Hero = ({ title, media, client, location, time }) => {
  const router = useRouter();

  const mainPage = router.pathname === "/";
  const projectPage = router.pathname.includes("/projects");

  return (
    <div className={`container ${classes.HeroSectionWrapper}`}>
      <div className={classes.HeroSection}>
        <div
          className={`${classes.HeroWrapper} ${
            projectPage ? classes.SwitchOrder : ""
          }`}
        >
          <div
            className={`${classes.ImageWrapper} ${
              projectPage ? classes.ProjectPageImageWrapper : ""
            }`}
          >
            {mainPage && (
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
            )}
            <Image
              layout="fill"
              objectFit="cover"
              alt="hero-image"
              src={media}
            ></Image>
          </div>
          <h1 className={` ${projectPage ? classes.ProjectPageTitle : ""}`}>
            {title}
          </h1>
        </div>
        {mainPage && (
          <p>
            At Bay by Dear Criminals is about a daydream that extends and fades
            away in the night. Its the end of a romantic story. All that is left
            is the memory of a feeling, a texture, a color.
          </p>
        )}
        {projectPage && (
          <div className={classes.ProjectInfoWrapper}>
            <div>
              <Link href="/projects" passHref>
                <a>
                  <ArrowBackSvg />
                </a>
              </Link>
            </div>
            <div>
              <div className={classes.Details}>
                <div className={classes.Detail}>
                  <span>client</span>
                  <span>{client}</span>
                </div>
                <div className={classes.Detail}>
                  <span>location</span>
                  <span>{location}</span>
                </div>
                <div className={classes.Detail}>
                  <span>time</span>
                  <span>{time}</span>
                </div>
              </div>
              <span className={classes.Dot}></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
