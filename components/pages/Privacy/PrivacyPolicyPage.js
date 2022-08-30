import classes from "./PrivacyPolicyPage.module.css";

const PrivacyPolicyPage = () => {
  return (
    <div className={classes.PrivacyPolicyWrapper}>
      <h1>Privacy Policy</h1>
      <div className={classes.IntroWrappper}>
        <p>
          BY ACCESSING OR USING OUR SERVICES, YOU CONSENT TO THE COLLECTION,
          TRANSFER, MANIPULATION, STORAGE, DISCLOSURE AND OTHER USES OF YOUR
          INFORMATION (COLLECTIVELY, &quot;USE OF YOUR INFORMATION&quot;) AS
          DESCRIBED IN THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH OR CONSENT
          TO THIS PRIVACY POLICY YOU MAY NOT ACCESS OR USE OUR SERVICES.
        </p>
      </div>
      <div className={classes.Policies}>
        <h2>License</h2>
        <div className={classes.ParaWrapper}>
          <p>
            The use of our services will automatically create information that
            will be collected. For example, when you use our Services, your
            geographic location, how you use the Services, information about the
            type of device you use, your Open Device Identification Number,
            date/time stamps for your visit, your unique device identifier, your
            browser type, operating system, Internet Protocol (IP) address, and
            domain name are all collected. This information is generally used to
            help us deliver the most relevant information to you and administer
            and improve the Site.
          </p>
          <p>
            7 problems with science facts. 8 ways best stores are completely
            overrated. The 17 worst amazing gadgets in history. 16 things about
            future technologies your kids don&apos;t want you to know. Why best
            stores are killing you.
          </p>
        </div>
      </div>
      <div className={classes.Policies}>
        <h2>Social Media Sharing</h2>
        <div className={classes.ParaWrapper}>
          <p>
            1. Our Services may now or in the future integrate with social
            sharing features and other related tools which let you share actions
            you take on our Services with other Apps, sites, or media, and vice
            versa. Your use of such features enables the sharing of information
            with your friends or the public, depending on the settings you
            establish with the social sharing service. Please refer to the
            privacy policies of those social sharing services for more
            information about how they handle the data you provide to or share
            through them.
          </p>
          <p>
            2. Any information or content that you voluntarily disclose for
            posting publicly to a social sharing service becomes available to
            the public, as controlled by any applicable privacy settings that
            you set with the social sharing service. Once you have shared User
            Content or made it public, that User Content may be re-shared by
            others. If you remove information that you posted to the social
            sharing service, copies may still remain viewable in cached and
            archived pages, or if other users or third parties, using the social
            sharing service, have re-shared, copied or saved that User Content.
          </p>
        </div>
      </div>
      <div className={classes.Policies}>
        <h2>Personal Information</h2>
        <div>
          <div className={classes.ListWrapper}>
            <p>1. Right to Access Your Personal Data. </p>
            <p>
              You have certain rights in relation to Personal Information we
              hold about you. You can exercise any of the following rights by
              contacting us using any of the methods in the Contact section
              below. We may need to request specific information from you to
              help us confirm your identity and ensure your right to access your
              Personal Data (or to exercise any of your other rights). This is a
              security measure to ensure that Personal Data is not disclosed to
              any person who has no right to receive it. We try to respond to
              all legitimate requests within one month. Occasionally it may take
              us longer than a month if your request is particularly complex or
              you have made a number of requests. In this case, we will notify
              you and keep you updated.
            </p>
          </div>

          <div className={classes.ListItem}>
            <p>2. Right of Correction or Completion of Your Personal Data</p>
            <p>
              If personal information we hold about you is not accurate, out of
              date or incomplete, you have a right to have the data corrected or
              completed. To make corrections to your account please contact us
              at the email address in our Contact section below.
            </p>
          </div>

          <div className={classes.ListItem}>
            <p>3. Right of Erasure or Deletion of Your Personal Data</p>
            <p>
              In certain circumstances, you have the right to request that
              personal information we hold about you is deleted. If we cannot
              delete the information you want, we will let you know and explain
              why. To request information deletion please contact us at the
              email address in our Contact section below.
            </p>
          </div>

          <div className={classes.ListItem}>
            <p>
              4. Right to Object to or Restrict Processing of Your Personal Data
            </p>
            <p>
              In certain circumstances, you have the right to object to our
              processing of your personal information. For example, you have the
              right to object to use of your personal information for direct
              marketing purposes. Similarly, you have the right to object to use
              of your personal information if we are processing your information
              on the basis of our legitimate interests and there are no
              compelling legitimate grounds for our processing which supersede
              your rights and interests. You may also have the right to restrict
              our use of your personal information, such as in circumstances
              where you have challenged the accuracy of the information and
              during the period where we are verifying its accuracy. To object
              to or restrict processing please contact us at the email address
              in our Contact section below.
            </p>
          </div>

          <div className={classes.ListItem}>
            <p>
              5. Right to Data Portability or Transfer of Your Personal Data
            </p>
            <p>
              You have the right to be provided with a copy of the information
              we maintain about you in a structured, machine-readable and
              commonly used format. To receive a copy of the information we
              maintain about you please contact us at the email address in our
              Contact section below. If you are a California resident and would
              like to make such a request, please submit your request in writing
              to: <span>legal@wasai.co</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
