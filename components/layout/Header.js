import classes from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container">
      <div className={classes.HeaderWrapper}>
        <div className={classes.LogoWrapper}>
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
