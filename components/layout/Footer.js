import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import CustomLink from "../UI/Link";
import { InstagramSvg, TweeterSvg, BehanceSvg, FacebookSvg } from "../svg/svg";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();
  const contactPage = router.pathname === "/contact";
  const firstImage = useRef();
  const secondImage = useRef();
  const thirdImage = useRef();
  const fourthImage = useRef();
  const fifthImage = useRef();
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const [isFirstSectionEnter, setIsFirstSectionEnter] = useState(false);
  useEffect(() => {
    setIsDesktop(typeof window !== "undefined" && window.innerWidth > 767);
  }, []);

  useEffect(() => {
    inView && setIsFirstSectionEnter(true);
    if (isFirstSectionEnter) return;
    if (contactPage) return;
    if (inView && !isFirstSectionEnter) {
      firstImage.current.style.transform = isDesktop
        ? "translate(0px, -5px)"
        : "translate(0px, 15px)";

      secondImage.current.style.transform = isDesktop
        ? "translate(0px, -7.5px)"
        : "translate(0px, 15px)";

      thirdImage.current.style.transform = isDesktop
        ? "translate(0px, 0px)"
        : "translate(0px, 10px)";

      fourthImage.current.style.transform = isDesktop
        ? "translate(0px, 2.5px)"
        : "translate(0px, 13.5px)";

      fifthImage.current.style.transform = isDesktop
        ? "translate(0px, 5px)"
        : "translate(0px, 20px)";
    } else {
      firstImage.current.style.transform = "translate(-100px, 900px)";
      secondImage.current.style.transform = "translate(-100px, 900px)";
      thirdImage.current.style.transform = "translate(-100px, 900px)";
      fourthImage.current.style.transform = "translate(-100px, 900px)";
      fifthImage.current.style.transform = "translate(-100px, 900px)";
    }
  }, [inView]);

  return (
    <footer
      className={`${classes.footer} ${contactPage ? classes.TopBorder : ""}`}
      ref={ref}
    >
      {!contactPage && (
        <div className={`${classes.grid} container`}>
          <div className={classes.gridTextWrapper}>
            <h2>Have an idea?</h2>
            <p>Lets hear about it. Contact us!</p>
            <CustomLink href="/contact" linkType="primary">
              Contact us
            </CustomLink>
          </div>
          <div className={classes.gridImageWrapper}>
            <div
              className={`${classes.ImageWrapper} ${classes.First}`}
              ref={firstImage}
            >
              <Image
                src="/footer-image-1.png"
                layout="fill"
                alt="footer-image"
              />
            </div>
            <div
              className={`${classes.ImageWrapper} ${classes.Second}`}
              ref={secondImage}
            >
              <Image
                src="/footer-image-2.png"
                layout="fill"
                alt="footer-image"
              />
            </div>
            <div
              className={`${classes.ImageWrapper} ${classes.Third}`}
              ref={thirdImage}
            >
              <Image
                src="/footer-image-3.png"
                layout="fill"
                alt="footer-image"
              />
            </div>
            <div
              className={`${classes.ImageWrapper} ${classes.Fourth}`}
              ref={fourthImage}
            >
              <Image
                src="/footer-image-4.png"
                layout="fill"
                alt="footer-image"
              />
            </div>
            <div
              className={`${classes.ImageWrapper} ${classes.Fifth}`}
              ref={fifthImage}
            >
              <Image
                src="/footer-image-5.png"
                layout="fill"
                alt="footer-image"
              />
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div
          className={`${classes.footerLinksWrapper} ${
            contactPage ? classes.MarginTopDisable : ""
          }`}
        >
          <div className={classes.LinksWrapper}>
            <Link href="/about">About us</Link>
            <Link href="/projects">Project</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/privacy-policy">Terms of Use</Link>
          </div>
          <div className={classes.Icons}>
            <InstagramSvg />
            <FacebookSvg />
            <TweeterSvg />
            <BehanceSvg />
          </div>
        </div>
        <div className={classes.footerMadeByWrapper}>
          <div>
            made by &nbsp;
            <Link href="https://www.vyntex.com/">vyntex</Link>
          </div>
          <div>with webflow</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
