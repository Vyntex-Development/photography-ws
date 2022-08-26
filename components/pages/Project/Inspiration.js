import classes from "./Inspiration.module.css";
import Image from "next/image";
import { BackDecorationLine } from "../../svg/svg";

const Inspiration = () => {
  return (
    <div className={classes.InspirationWrapper}>
      <div className={`${classes.Inspiration} container`}>
        <div className={classes.InspirationDescriptionWrapper}>
          <div className={classes.InspirationDescriptionImageMain}>
            <Image src="/inspiration-img-1.png" layout="fill" />
          </div>
          <div className={classes.TextWrapper}>
            <h2>Inspiration</h2>
            <p>
              Classic as Chanel attitude is everything after party statement
              knit Issey, Rei and Yohji prom fever Paris fashion little black
              dress. What do models eat anyway? Classic as Chanel attitude is
              everything after party statement knit Issey
            </p>
          </div>
        </div>
        <div className={classes.InspirationImagesWrapper}>
          <div className={classes.GridImageWrapper}>
            <Image layout="fill" src="/project-grid-img-1.png" />
          </div>
          <div className={classes.GridImageWrapper}>
            <Image layout="fill" src="/project-grid-img-2.png" />
          </div>
          <div className={classes.GridImageWrapper}>
            <Image layout="fill" src="/project-grid-img-3.png" />
          </div>
          <div className={classes.GridImageWrapper}>
            <Image layout="fill" src="/project-grid-img-4.png" />
          </div>
          <div className={classes.GridImageWrapper}>
            <Image layout="fill" src="/project-grid-img-5.png" />
          </div>
          <div className={classes.GridImageWrapper}>
            <Image layout="fill" src="/project-grid-img-6.png" />
          </div>
        </div>
        <div className={classes.ImageWrapperStyleAbsolute}>
          <Image src="/inspiration-img-2.png" layout="fill" />
        </div>
      </div>

      <BackDecorationLine />
    </div>
  );
};

export default Inspiration;
