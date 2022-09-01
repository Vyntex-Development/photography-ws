import Link from "next/link";
import Image from "next/image";
import classes from "./List.module.css";
import { useState, useRef, useEffect } from "react";
const List = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const setFilteredProjectsHandler = (projectType) => {
    // setAnimate(false);
    setFilteredProjects(
      [...projects].filter((p) =>
        projectType ? p.type === projectType : projects
      )
    );
    // setAnimate(true);
  };

  return (
    <div className="container">
      <div className={classes.ListWrapper}>
        <div className={classes.TitleLinksWrapper}>
          <h2 className={`${classes.ProjectHeading} h2`}>Projects</h2>
          <div className={classes.SpansWrapper}>
            <span onClick={() => setFilteredProjectsHandler("")}>All</span>
            <span onClick={() => setFilteredProjectsHandler("personal")}>
              Personal
            </span>
            <span onClick={() => setFilteredProjectsHandler("commercial")}>
              Commercial
            </span>
          </div>
        </div>
        <div className={classes.List}>
          {/* <div className={classes.ImageWrapper}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="projects"
              src="/images/projects.png"
            ></Image>
          </div> */}
          {/* <div className={classes.FirstLine}></div> */}
          {filteredProjects.map(({ title, id, details, slug }) => {
            let year = details.time.split(" ");

            return (
              <div key={id} className={classes.LinksDotWrapper}>
                <Link passHref={true} href={`/projects/${slug}`}>
                  <a href="">
                    <h3>{title}</h3>
                    <p>{year[year.length - 1]}</p>
                    <div className={classes.SpanBlock}></div>
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

export default List;
