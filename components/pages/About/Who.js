import classes from "./Who.module.css";
import Image from "next/image";
import Link from "next/link";

const Who = () => {
  return (
    <div className={`${classes.WhoSectionWrapper} container`}>
      <div className={classes.WhoWrapper}>
        <div className={classes.HeadingParagraphWrapper}>
          <h1>Who we are</h1>
          <p>
            In Pedro Almodovar&apos;s early film ¿Qué he hecho yo para merecer
            esto? What Have I Done to Deserve this? - two writers devise a plan
            to sell diaries, although they know them to be forged. Their plot
            depends upon the protagonist&apos;s husband Antonio.
          </p>
        </div>
        <div className={classes.ImageWrapper}>
          <Image
            layout="fill"
            objectFit="cover"
            alt="who"
            src="/images/who.png"
          ></Image>
        </div>

        <div className={classes.Down}>
          <div className={classes.Left}>
            <div className={classes.Dot}></div>
          </div>
          <div className={classes.Right}>
            <h2>Our Story</h2>
            <p>
              As such, he is convinced that his work is really not forgery,
              since the source material – or so he was lead to believe – is
              true.
              
           
            </p>
            <p>
            Certainly documents and records can serve as some measure of
              authenticity, but the events, experiences and self­understanding
              of the autobiographical subject can only be confirmed by the
              subject herself; the signa­ture serves as a guarantor.
            </p>

            <p>
              As madcap a storyline as this might seem, it illustrates a problem
              that has always plagued autobi­ography and its claims to veracity:
              only the signature of the autobiographical subject attests to the
              truth of what follows.
            </p>
            <p>
              As Almodovar&apos;s forger reveals, the signature has limited
              probative value; it may simply be a lie. In an age when major
              publishing houses rely on a battery of ghost writers, the
              signature often indicates that the apparent autobio­graphical
              subject has merely signed off on what appears under her name but
              cannot claim authorship strictly speaking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
