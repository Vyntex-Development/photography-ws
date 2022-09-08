import classes from "./ContactPage.module.css";
import {
  InstagramSvg,
  FacebookSvg,
  TweeterSvg,
  BehanceSvg,
  LocationSvg,
  TelephoneSvg,
} from "../../svg/svg";
import Input from "../../UI/Input";
import TextArea from "../../UI/TextArea";
import Button from "../../UI/Button";
import Faq from "./Faq";

const ContactPage = () => {
  return (
    <div className={`${classes.Grid} container`}>
      <div>
        <h2>Get in touch!</h2>
        <p>
          Everyone&apos;s a handyman any work goin mate? a poor tradie blames
          his tools coffee break tough as nails ball park figure tools down
          excavator hard yakka.
        </p>
        <div className={classes.ContactDetails}>
          <div>
            <TelephoneSvg />
            <p>(904) 737-2290</p>
          </div>
          <div>
            <LocationSvg />
            <p>4685 Sunbeam Rd, Florida</p>
          </div>
        </div>
        <div className={classes.SocialIcons}>
          <InstagramSvg />
          <FacebookSvg />
          <TweeterSvg />
          <BehanceSvg />
        </div>
      </div>
      <div>
        <form action="" className={classes.Form}>
          <div>
            <p className={classes.FormTitles}>contact info</p>
            <div className={classes.FormInputWrapper}>
              <Input placeholder="first name *" />
              <Input placeholder="last name *" />
              <Input placeholder="email *" />
              <Input placeholder="phone number" />
            </div>
          </div>
          <div>
            <p className={classes.FormTitles}>your message</p>
            <TextArea placeholder="message" />
          </div>
          <div className={classes.FormBottomWrapper}>
            <Button type="submit" btnType="primary">
              submit
            </Button>
            <p>
              By submitting this form you read and agree to the Terms &
              Conditions and our privacy policy.
            </p>
          </div>
        </form>
      </div>
      <div>
        <h2>Got questions?</h2>
        <h2>We got answers!</h2>
        <p>
          Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
          molestie venenatis malesuada.
        </p>
      </div>
      <Faq />
    </div>
  );
};

export default ContactPage;
