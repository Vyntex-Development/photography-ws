import Link from "next/link";
import Image from "next/image";
import classes from "./Portfolio.module.css";
import { useState, useRef, useEffect } from "react";

const Portfolio = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  // const [animate, setAnimate] = useState(false);
  // const gridRef = useRef();
  const setFilteredProjectsHandler = (projectType) => {
    // setAnimate(false);
    setFilteredProjects(
      [...projects].filter((p) =>
        projectType ? p.type === projectType : projects
      )
    );
    // setAnimate(true);
  };

  // useEffect(() => {
  //   if (animate) {
  //     setTimeout(() => {
  //       gridRef.current.classList.remove("animate-grid");
  //     }, 200);
  //   }
  // }, [animate]);

  return (
    <div className="container">
      <div className={classes.ProtfolioWrapper}>
        <div className={classes.SpansWrapper}>
          <span onClick={() => setFilteredProjectsHandler("")}>All</span>
          <span onClick={() => setFilteredProjectsHandler("personal")}>
            Personal
          </span>
          <span onClick={() => setFilteredProjectsHandler("commercial")}>
            Commercial
          </span>
        </div>
        <div
          // ref={gridRef}
          className={classes.PortfolioGrid}
        >
          {filteredProjects.map(({ title, description, media, id, slug }) => {
            return (
              <div key={id}>
                <Link href={`/projects/${slug}`} passHref>
                  <a href="">
                    <div className={classes.ImageWrapper}>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src={media}
                      ></Image>
                    </div>
                    <div className={classes.GridItemText}>
                      <p>{title}</p>
                      <p>{description}</p>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
