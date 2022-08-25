import NextLink from "next/link";
import classes from "./Link.module.css";

const Link = ({ href, children, linkType }) => {
  let linkClasses;

  if (linkType === "primary") {
    linkClasses = classes.Primary;
  }

  if (linkType === "secondary") {
    linkClasses = classes.Secondary;
  }

  return (
    <div className={`${classes.Link}  ${linkClasses}`}>
      <NextLink href={href} passHref>
        {children}
      </NextLink>
    </div>
  );
};

export default Link;
