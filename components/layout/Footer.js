import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import CustomLink from "../UI/Link";
import { InstagramSvg, TweeterSvg, BehanceSvg, FacebookSvg } from "../svg/svg";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const contactPage = router.pathname === "/contact";

  return (
    <footer className={classes.footer}>
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
            <div className={classes.ImageWrapper}>
              <Image
                src="/footer-image-1.png"
                objectFit="contain"
                layout="responsive"
                height={265}
                width={465}
                alt="footer-image"
              />
            </div>
            <div className={classes.ImageWrapper}>
              <Image
                src="/footer-image-2.png"
                objectFit="contain"
                layout="responsive"
                height={265}
                width={430}
                alt="footer-image"
              />
            </div>
            <div className={classes.ImageWrapper}>
              <Image
                src="/footer-image-3.png"
                objectFit="contain"
                layout="responsive"
                height={245}
                width={400}
                alt="footer-image"
              />
            </div>
            <div className={classes.ImageWrapper}>
              <Image
                src="/footer-image-4.png"
                objectFit="contain"
                layout="responsive"
                height={242}
                width={445}
                alt="footer-image"
              />
            </div>
            <div className={classes.ImageWrapper}>
              <Image
                src="/footer-image-5.png"
                objectFit="contain"
                layout="responsive"
                height={245}
                width={480}
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
          <div>
            <Link href="/about-us">About us</Link>
            <Link href="/project">Project</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact-us">Contact us</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
          </div>
          <div>
            <InstagramSvg />
            <FacebookSvg />
            <TweeterSvg />
            <BehanceSvg />
          </div>
        </div>
        <div className={classes.footerMadeByWrapper}>
          <div>
            made by &nbsp;
            <Link href="/about-us">vyntex</Link>
          </div>
          <div>with webflow</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
