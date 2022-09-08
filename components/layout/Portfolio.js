import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import classes from "./Portfolio.module.css";
import { useInView } from "react-intersection-observer";

const Portfolio = ({ projects }) => {
  const scrollWrapper = useRef();
  const portfolioGridRef = useRef();
  const [ref, inView, entry] = useInView({
    threshold: 0.3,
  });
  const [projectType, setProjectType] = useState("");
  const setFilteredProjectsHandler = (projectType) => {
    setProjectType(projectType);
  };

  const allProjects = projects;
  const personalProjects = projects.filter((p) => p.type === "personal");
  const comercialProjects = projects.filter((p) => p.type === "commercial");

  const tabs = [
    { type: "", filteredProjects: allProjects },
    { type: "personal", filteredProjects: personalProjects },
    { type: "commercial", filteredProjects: comercialProjects },
  ];

  useEffect(() => {
    console.log(entry);
    scrollWrapper.current.style.opacity = inView ? "1" : "0";
    scrollWrapper.current.style.transform = inView
      ? `translate(calc(-${
          entry.target.getBoundingClientRect().left
        }px - 3.88em), -88px)`
      : "0";
    scrollWrapper.current.style.transform =
      inView && window.innerWidth < 991 ? `translate( -16px, -88px)` : "0";

    scrollWrapper.current.style.transition = inView
      ? "all 0.7s ease"
      : "all 0.2s ease";
  }, [inView]);

  return (
    <div className={classes.PortfolioContainer}>
      <div className={classes.SectionContainer}>
        <div className={classes.CurveWrapper}>
          <Image
            layout="fill"
            objectFit="contain"
            alt="curve"
            src="/images/curve.png"
          ></Image>
        </div>
        {projectType === "" && (
          <div className={classes.CurveWrapperSecond}>
            <Image
              layout="fill"
              objectFit="contain"
              alt="curve"
              src="/images/curve-1.png"
            ></Image>
          </div>
        )}
        <div>
          <div className="container" ref={ref}>
            <div className={classes.ProtfolioWrapper}>
              <div className={classes.ScollElementWrapper} ref={scrollWrapper}>
                <div className={classes.ScollElement}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="scroll"
                    src="/images/scroll.png"
                  ></Image>
                </div>
              </div>
              <div className={classes.SpansWrapper}>
                <span
                  className={`${projectType === "" ? classes.Selected : ""}`}
                  onClick={() => setFilteredProjectsHandler("")}
                >
                  All
                </span>
                <span
                  className={`${
                    projectType === "personal" ? classes.Selected : ""
                  }`}
                  onClick={() => setFilteredProjectsHandler("personal")}
                >
                  Personal
                </span>
                <span
                  className={`${
                    projectType === "commercial" ? classes.Selected : ""
                  }`}
                  onClick={() => setFilteredProjectsHandler("commercial")}
                >
                  Commercial
                </span>
              </div>
              <div className={classes.PortfolioGrid} ref={portfolioGridRef}>
                {tabs.map(({ type, filteredProjects }) => {
                  return filteredProjects.map(
                    ({ title, description, media, id, slug }) => {
                      return (
                        projectType === type && (
                          <div
                            key={id}
                            className={`${
                              projectType === type
                                ? classes.AnimateTabContent
                                : ""
                            }`}
                          >
                            <Link href={`/projects/${slug}`} passHref>
                              <a href="">
                                <div className={classes.ImageWrapper}>
                                  <Image
                                    layout="fill"
                                    objectFit="cover"
                                    alt="hero"
                                    src={media}
                                  ></Image>
                                  <div className={classes.ImageOverlay}></div>
                                </div>
                                <div className={classes.GridItemText}>
                                  <p>{title}</p>
                                  <p>{description}</p>
                                </div>
                              </a>
                            </Link>
                          </div>
                        )
                      );
                    }
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
