import classes from "./ProjectInfo.module.css";
import Image from "next/image";
import { ScrollToTopSvg } from "../../svg/svg";

const ProjectInfo = () => {
  return (
    <div className={`${classes.ProjectDetailsWrapper} container`}>
      <div className={classes.ProjectDetails}>
        <div className={classes.Grid}>
          <div className={classes.GridItem}>
            <p>art director</p>
          </div>
          <div className={classes.GridItem}>
            <p>sophie amelie</p>
          </div>
          <span></span>
        </div>
        <div className={classes.Grid}>
          <div className={classes.GridItem}>
            <p>photographer</p>
          </div>
          <div className={classes.GridItem}>
            <p>sophie amelie</p>
          </div>
          <span></span>
        </div>
        <div className={classes.Grid}>
          <div className={classes.GridItem}>
            <p>make-up</p>
          </div>
          <div className={classes.GridItem}>
            <p>gracy jones</p>
          </div>
          <span></span>
        </div>
        <div className={classes.Grid}>
          <div className={classes.GridItem}>
            <p>costumes</p>
          </div>
          <div className={classes.GridItem}>
            <p>gracy jones</p>
            <p>joy liv</p>
          </div>
          <span></span>
        </div>
      </div>
      <div className={classes.NavigateWrapper}>
        <div className={classes.PrevProjectWrapper}>
          <p>previous project</p>
          <h3>Living in the City</h3>
          <Image src="/arrow.png" width={150} height={30} />
        </div>
        <div className={classes.NextProjectWrapper}>
          <p>next project</p>
          <h3>Becoming you</h3>
          <Image src="/arrow.png" width={150} height={30} />
        </div>
      </div>
      <ScrollToTopSvg />
    </div>
  );
};

export default ProjectInfo;
