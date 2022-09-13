import Link from "next/link";
import classes from "./List.module.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useMousePosition } from "../../../components/hooks/useMousePosition";

const List = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [type, setType] = useState("");
  const [visibleImageId, setVisibleImageId] = useState(null);
  const [animateImage, setAnimateImage] = useState(false);
  const [inside, setInside] = useState(false);
  const imageRef = useRef();
  const { x, y } = useMousePosition();

  const imageWidth = 383;
  const imageHeight = 419;

  const [ref, inView, entry] = useInView();

  const setVisibleImageIdHandler = (id) => {
    setVisibleImageId(id);
  };

  const setFilteredProjectsHandler = (projectType) => {
    setType(projectType);
    setFilteredProjects(
      [...projects].filter((p) =>
        projectType ? p.type === projectType : projects
      )
    );
  };

  useEffect(() => {
    if (!inside) setVisibleImageId(-1);
    if (inView) setAnimateImage(true);
  }, [inView, inside]);

  return (
    <div className="container">
      <div className={classes.ListWrapper}>
        <div className={classes.TitleLinksWrapper}>
          <h2 className={`${classes.ProjectHeading} h2`}>Projects</h2>
          <div className={classes.SpansWrapper}>
            <span
              className={`${type === "" ? classes.Selected : ""}`}
              onClick={() => setFilteredProjectsHandler("")}
            >
              All
            </span>
            <span
              className={`${type === "personal" ? classes.Selected : ""}`}
              onClick={() => setFilteredProjectsHandler("personal")}
            >
              Personal
            </span>
            <span
              className={`${type === "commercial" ? classes.Selected : ""}`}
              onClick={() => setFilteredProjectsHandler("commercial")}
            >
              Commercial
            </span>
          </div>
        </div>
        <div
          className={classes.List}
          onMouseEnter={() => {
            setInside(true);
          }}
          onMouseLeave={() => {
            setInside(false);
          }}
        >
          {filteredProjects.map(({ title, id, details, slug }) => {
            let year = details.time.split(" ");
            let elId = id;
            return (
              <div
                key={id}
                className={classes.LinksDotWrapper}
                onMouseEnter={() => setVisibleImageIdHandler(elId)}
              >
                <Link passHref href={`/projects/${slug}`}>
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
        <div className={classes.Images}>
          {filteredProjects.map(({ media_animation, id }) => {
            return (
              <div
                key={id}
                className={`${classes.ImageWrapper} ${
                  visibleImageId === id ? classes.Animate : ""
                }`}
                ref={imageRef}
                style={{
                  opacity: `${visibleImageId === id ? "1" : "0"}`,
                  transform: `translate(${x - imageWidth / 2}px, ${
                    y - imageHeight / 2
                  }px) ${
                    visibleImageId === id ? "rotate(-15deg)" : "rotate(0deg)"
                  } ${visibleImageId === id ? "scale(1.1)" : "scale(1)"}  `,
                }}
              >
                <Image objectFit="cover" src={media_animation} height={imageHeight} width={imageWidth} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
