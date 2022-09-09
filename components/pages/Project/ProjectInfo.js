import classes from "./ProjectInfo.module.css";
import Image from "next/image";
import { ScrollToTopSvg } from "../../svg/svg";
import Link from "next/link";

const ProjectInfo = ({ project, projects }) => {
  const indexOfProject = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[indexOfProject - 1];
  const nextProject = projects[indexOfProject + 1];
  const { stuff } = project;
  const { art_director, makeup, photographer, costumes } = stuff;
  return (
    <div className={`${classes.ProjectDetailsWrapper} container`}>
      <div className={classes.ProjectDetails}>
        <div className={classes.Grid}>
          <div className={classes.GirdItemWrapper}>
            <div className={classes.GridItem}>
              <p>art director</p>
            </div>
            <div className={classes.GridItem}>
              <p>{art_director}</p>
            </div>
            <span></span>
          </div>
        </div>
        <div className={classes.Grid}>
          <div className={classes.GirdItemWrapper}>
            <div className={classes.GridItem}>
              <p>photographer</p>
            </div>
            <div className={classes.GridItem}>
              <p>{photographer}</p>
            </div>
            <span></span>
          </div>
        </div>
        <div className={classes.Grid}>
          <div className={classes.GirdItemWrapper}>
            <div className={classes.GridItem}>
              <p>make-up</p>
            </div>
            <div className={classes.GridItem}>
              <p>{makeup}</p>
            </div>
            <span></span>
          </div>
        </div>
        <div className={classes.Grid}>
          <div className={classes.GirdItemWrapper}>
            <div className={classes.GridItem}>
              <p>costumes</p>
            </div>
            <div className={classes.GridItem}>
              {costumes.map((c, i) => (
                <p key={i}>{c}</p>
              ))}
            </div>
            <span></span>
          </div>
        </div>
      </div>
      <div className={classes.NavigateWrapper}>
        {prevProject && (
          <div className={classes.PrevProjectWrapper}>
            <Image
              src={prevProject.media}
              height={225}
              width={210}
              objectFit="cover"
            />
            <p>previous project</p>
            <Link href={`/projects/${prevProject.slug}`} passHref>
              <h3>{prevProject.title}</h3>
            </Link>
            <Image src="/arrow.png" width={150} height={30} />
          </div>
        )}
        {nextProject && (
          <div className={classes.NextProjectWrapper}>
            <Image
              src={nextProject.media}
              height={225}
              width={210}
              objectFit="cover"
            />
            <p>next project</p>
            <Link href={`/projects/${nextProject.slug}`} passHref>
              <h3>{nextProject.title}</h3>
            </Link>

            <Image src="/arrow.png" width={150} height={30} />
          </div>
        )}
      </div>
      <ScrollToTopSvg />
    </div>
  );
};

export default ProjectInfo;
