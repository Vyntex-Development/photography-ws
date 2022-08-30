import Image from "next/image";
import classes from "./Custom404Page.module.css";
import Link from "../../UI/Link";

const Custom404Page = () => {
  return (
    <div className={classes.CoverImage}>
      <div className={classes.Layer}></div>
      <Image src="/404-cover-img.png" layout="fill" />
      <div className={classes.ContentWrapper}>
        <Image
          src="/404-img.png"
          height={206}
          width={463}
          objectFit="contain"
        />
        <h2>Shoot!This page don&apos;t even exist!</h2>
        <p>
          Sorry, the page you were looking for is no longer available.
          We&apos;re working on fixing the problem.
        </p>
        <Link linkType="secondary" href="/">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Custom404Page;
