import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const projectPage = router.pathname.includes("/projects");
  const contactPage = router.pathname === "/contact";

  return (
    <div className="container">
      <div className={classes.HeaderWrapper}>
        <div
          className={classes.LogoWrapper}
          style={{ filter: `${projectPage || contactPage ? "invert(1)" : ""}` }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            alt="logo"
            src="/images/logo.png"
          ></Image>
        </div>
        <div className={classes.LinksWrapper}>
          <Link passHref={true} href="https://www.google.com/">
            <a className={classes.Link}>HOME</a>
          </Link>
          <Link passHref={true} href="https://www.google.com/">
            <a className={classes.Link}>ABOUT</a>
          </Link>
          <Link passHref={true} href="https://www.google.com/">
            <a className={classes.Link}>PROJECTS</a>
          </Link>
          <Link passHref={true} href="https://www.google.com/">
            <a className={classes.Link}>BLOG</a>
          </Link>
          <Link passHref={true} href="https://www.google.com/">
            <a className={classes.Link}>CONTACT</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
