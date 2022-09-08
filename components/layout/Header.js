import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const projectPage = router.pathname.includes("/projects");
  const contactPage = router.pathname === "/contact";
  const aboutPage = router.pathname === "/about";

  return (
    <div className={`${classes.HeaderSectionWrapper} container`}>
      <div className={`${classes.MobileMenu} ${isOpen ? classes.Open : ""}`}>
        <Link passHref={true} href="/">
          <a className={`${classes.Link} ${isOpen ? classes.AnimateLink : ""}`}>
            HOME
          </a>
        </Link>
        <Link passHref={true} href="/about">
          <a className={`${classes.Link} ${isOpen ? classes.AnimateLink : ""}`}>
            ABOUT
          </a>
        </Link>
        <Link passHref={true} href="/projects">
          <a className={`${classes.Link} ${isOpen ? classes.AnimateLink : ""}`}>
            PROJECTS
          </a>
        </Link>
        <Link passHref={true} href="/blogs">
          <a className={`${classes.Link} ${isOpen ? classes.AnimateLink : ""}`}>
            BLOG
          </a>
        </Link>
        <Link passHref={true} href="/contact">
          <a className={`${classes.Link} ${isOpen ? classes.AnimateLink : ""}`}>
            CONTACT
          </a>
        </Link>
      </div>
      <div className={classes.HeaderWrapper}>
        <div
          className={classes.LogoWrapper}
          style={{
            filter: `${
              projectPage || contactPage || aboutPage
                ? "invert(1)"
                : "invert(0)"
            }`,
          }}
        >
          <Link passHref={true} href="/">
            <a href="">
              <Image
                layout="fill"
                objectFit="cover"
                alt="logo"
                src="/images/logo.png"
              ></Image>
            </a>
          </Link>
        </div>
        <div
          className={`${classes.MenuButtonWrapper} ${
            isOpen ? classes.AnimateHamburger : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            style={{
              backgroundColor: `${
                projectPage || contactPage || aboutPage ? "#DFDFE0" : "#012839"
              }`,
            }}
          ></span>
          <span
            style={{
              backgroundColor: `${
                projectPage || contactPage || aboutPage ? "#DFDFE0" : "#012839"
              }`,
            }}
          ></span>
          <span
            style={{
              backgroundColor: `${
                projectPage || contactPage || aboutPage ? "#DFDFE0" : "#012839"
              }`,
            }}
          ></span>
        </div>
        <div className={classes.LinksWrapper}>
          <Link passHref={true} href="/">
            <a className={classes.Link}>HOME</a>
          </Link>
          <Link passHref={true} href="/about">
            <a className={classes.Link}>ABOUT</a>
          </Link>
          <Link passHref={true} href="/projects">
            <a className={classes.Link}>PROJECTS</a>
          </Link>
          <Link passHref={true} href="/blogs">
            <a className={classes.Link}>BLOG</a>
          </Link>
          <Link passHref={true} href="/contact">
            <a className={classes.Link}>CONTACT</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
