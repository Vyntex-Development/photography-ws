import Image from "next/image";
import classes from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={classes.Subscribe}>
      <Image src="/subscribe-img.png" layout="fill" objectFit="cover" />
      <div className={`${classes.FormWrapper} container`}>
        <form className={classes.Form} action="">
          <h3>Subscribe to Our Newsletter:</h3>
          <p>
            Hand crafted kidnap insurance Monaco space tourist upgrade lifestyle
            the playboy mansion the home in the Hamptons bespoke Maybachs on
            bachs on bachs on bachs
          </p>
          <div className={classes.InputWrapper}>
            <input type="text" placeholder="Email" />
            <button>subscribe</button>
          </div>
          <p>
            By submitting this form you read and agree to the Terms & Conditions
            and our privacy policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
