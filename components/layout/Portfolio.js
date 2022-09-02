import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import classes from "./Portfolio.module.css"

import { useInView } from 'react-intersection-observer'
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const Portfolio = ({ projects }) => {

    const scrollRef = useRef();
    const containerRef = useRef();
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const setFilteredProjectsHandler = (projectType) => {
    setFilteredProjects(
      [...projects].filter((p) =>
        projectType ? p.type === projectType : projects
      )
    );
    
  };
    useEffect(() => {
        if (!containerRef?.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            
            if (entry.isIntersecting) {
                console.log("ulazi u funkijcu")
                scrollRef.current.style.opacity = "1"
                scrollRef.current.style.position = "sticky";
                scrollRef.current.style.marginLeft = "auto";
                scrollRef.current.style.marginRight = 0;
                scrollRef.current.style.paddingTop = 210;
                scrollRef.current.style.zIndex = 5;
                
            }
            else scrollRef.current.style.opacity = "0";


        });

        observer.observe(containerRef.current)
    }, [containerRef]);
    
    return (
        <div className="container">
                <div className={classes.ProtfolioWrapper} ref={containerRef}>
                <div className={classes.ScrollWrapper} ref={scrollRef}>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        alt="scroll"
                        src="/images/scroll.png"
                    ></Image>
    
                </div>
                <div className={classes.CurveWrapper}>
                        <Image
                            layout="fill"
                            objectFit="cover"
                            alt="curve"
                            src="/images/curve.png"
                        ></Image>

                        </div>
                    <div className={classes.SpansWrapper}>
                        <span onClick={() => setFilteredProjectsHandler("")}>All</span>
                        <span onClick={() => setFilteredProjectsHandler("personal")}>
                            Personal
                        </span>
                        <span onClick={() => setFilteredProjectsHandler("commercial")}>
                            Commercial
                        </span>
                    </div>
                <div className={classes.PortfolioGrid}
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
