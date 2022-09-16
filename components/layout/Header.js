import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Header = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const projectPage = router.pathname.includes("/projects");
  const contactPage = router.pathname === "/contact";
  const aboutPage = router.pathname === "/about";
  const isHomepageOnMobile = router.pathname === "/";
  const isBlogOrBlogCmsPage =
    router.pathname === "/blog" || router.pathname.includes("/blog");
  const is404Page = router.pathname === "/404";
  const isProjectsPageOnMobile = router.pathname === "/projects";
  const isBlogCmsPage = router.pathname === "/blog/[slug]";

  useEffect(() => {
    setIsDesktop(typeof window !== "undefined" && window.innerWidth > 767);
  }, []);

  return (
    <div className={`${classes.HeaderSectionWrapper} container`}>
      <div className={`${classes.MobileMenu} ${isOpen ? classes.Open : ""}`}>
        <Link passHref={true} href="/">
          <a
            className={`${classes.Link} ${isOpen ? classes.AnimateLink : ""}`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            HOME
          </a>
        </Link>
        <Link passHref={true} href="/about">
          <a
            className={`${classes.Link} ${isOpen ? classes.AnimateLink : ""}`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            ABOUT
          </a>
        </Link>
        <Link passHref={true} href="/projects">
          <a
            className={`${classes.Link} ${isOpen ? classes.AnimateLink : ""}`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            PROJECTS
          </a>
        </Link>
        <Link passHref={true} href="/blog">
          <a
            className={`${classes.Link} ${isOpen ? classes.AnimateLink : ""}`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            BLOG
          </a>
        </Link>
        <Link passHref={true} href="/contact">
          <a
            className={`${classes.Link} ${isOpen ? classes.AnimateLink : ""}`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            CONTACT
          </a>
        </Link>
      </div>
      <div
        className={`${classes.HeaderWrapper} ${
          isBlogCmsPage ? classes.HeaderWrapperForBlogCmsPage : ""
        }`}
      >
        <div
          className={`${classes.LogoWrapper} ${
            isHomepageOnMobile || isProjectsPageOnMobile || isDesktop
              ? ""
              : classes.LogoWrapperAlternative
          }`}
          style={{
            filter: `${
              projectPage || contactPage || aboutPage
                ? "invert(1)"
                : "invert(0)"
            }`,
          }}
        >
          {isHomepageOnMobile || isProjectsPageOnMobile || isDesktop ? (
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
          ) : (
            <Link passHref={true} href="/">
              <p
                style={{
                  color: `${
                    is404Page || isBlogOrBlogCmsPage ? "#012839" : "#dfdfe0"
                  }`,
                  filter: `${
                    is404Page || isBlogOrBlogCmsPage ? "invert(0)" : "invert(1)"
                  }`,
                }}
                className={classes.LogoAlternative}
              >
                Alexander Alexandrovic
              </p>
            </Link>
          )}
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
          <Link passHref={true} href="/blog">
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
