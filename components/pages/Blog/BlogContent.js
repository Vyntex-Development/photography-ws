import classes from "./BlogContent.module.css";
import Image from "next/image";
import Button from "../../UI/Button";
import { ClockSvg, InstagramSvg, FacebookSvg, TweeterSvg } from "../../svg/svg";
import { useEffect, useState, useRef } from "react";
import Input from "../../UI/Input";
import { useInView } from "react-intersection-observer";

const BlogContent = ({ details, setDuration }) => {
  const { author, reading_time, date } = details;
  const [readingDurationVisualDisplay, setReadingDurationVisualDisplay] =
    useState();
  const [isInitial, setIsInitial] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef();
  const [ref, inView, entry] = useInView();
  const [ref2, inView2] = useInView({
    trashhold: 0.3,
  });

  useEffect(() => {
    const animateOnScroll = () => {
      if (inView) {
        let duration = (window.scrollY / entry.boundingClientRect.height) * 100;
        if (duration > 100) return;
        setReadingDurationVisualDisplay(duration);
        setDuration(duration);
      }
    };
    window.addEventListener("scroll", animateOnScroll);

    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, [inView]);

  useEffect(() => {
    inView2 && setIsInitial(true);
    if (isInitial) return;
    if (inView2 && !modalIsOpen) {
      setModalIsOpen(true);
      return;
    }
  }, [inView2, modalIsOpen]);

  return (
    <div>
      <div className={classes.BlogContentWrapper} ref={ref}>
        <div className={classes.StickyWrapper}>
          <div>
            <div className={classes.BlogAboutWrapper}>
              <div className={classes.BlogAuthorPhoto}>
                <Image
                  src="/blog-author-img.png"
                  width={48}
                  height={48}
                  objectFit="contain"
                />
              </div>
              <div className={classes.BlogInfoWrapper}>
                <p>
                  By <span>{author}</span>
                </p>
                <div className={classes.Info}>
                  <p>{date}</p>
                  <div>
                    <ClockSvg />
                    <p>{reading_time} min</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.ReadingDuration}>
              <div
                style={{ width: `${readingDurationVisualDisplay}%` }}
                className={classes.Duration}
              ></div>
            </div>
            <div className={classes.SocialIcons}>
              <p>share:</p>
              <InstagramSvg />
              <FacebookSvg />
              <TweeterSvg />
            </div>
            <div className={classes.ImageWraper}>
              <Image
                src="/blog-img.png"
                width={207}
                height={150}
                objectFit={`${
                  typeof window !== "undefined" && window.innerWidth > 768
                    ? "contain"
                    : "cover"
                }`}
              />
            </div>
            <div>
              <form className={classes.Form} action="">
                <p>subscribe to our newsletter:</p>
                <div className={classes.FormInnerWrapper}>
                  <Input placeholder="Email" />
                  <Button btnType="secondary" type="submit">
                    Subscribe
                  </Button>
                </div>

                <p>
                  By submitting this form you read and agree to the Terms &
                  Conditions and our privacy policy.
                </p>
              </form>
            </div>

            {modalIsOpen && (
              <div
                className={classes.Backdrop}
                ref={modalRef}
                onClick={() => setModalIsOpen(false)}
              >
                <div className={classes.SubscribeReadingDuration}>
                  <div
                    style={{ width: `${readingDurationVisualDisplay}%` }}
                    className={classes.Duration}
                  ></div>
                </div>
                <div className={classes.SubscribeModal}>
                  <div className={classes.ImageWraper}>
                    <Image
                      src="/blog-img.png"
                      width={207}
                      height={150}
                      objectFit={`${
                        typeof window !== "undefined" && window.innerWidth > 768
                          ? "contain"
                          : "cover"
                      }`}
                    />
                  </div>
                  <div>
                    <form className={classes.Form} action="">
                      <p>subscribe to our newsletter:</p>
                      <div className={classes.FormInnerWrapper}>
                        <Input placeholder="Email" />
                        <Button
                          btnType="secondary"
                          type="submit"
                          onClick={() => setModalIsOpen(false)}
                        >
                          Subscribe
                        </Button>
                      </div>

                      <p>
                        By submitting this form you read and agree to the Terms
                        & Conditions and our privacy policy.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={classes.BlogContentText}>
          <div className={classes.IntroWrapper}>
            <p className={classes.Intro}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
          </div>
          <div ref={ref2}>
            <h3>What works for me?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
          </div>
          <div className={classes.Quote}>
            <div className={classes.QuoteBorder}></div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus.
            </span>
            <p>— John Doe, CEO & Founder</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
          </div>
          <div className={classes.ImageWrapper}>
            <Image src="/blog-cms-img.png" layout="fill" objectFit="cover" />
          </div>
          <p className={classes.ImageText}>
            Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
          </p>
          <div className={classes.Choices}>
            <h3>So many choices</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
            <div>
              <p>
                Sagittis et eu at elementum, quis in. Proin praesent volutpat
                egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi
                ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate
                consectetur ac ultrices at diam dui eget fringilla tincidunt.
                Arcu sit dignissim massa erat cursus vulputate gravida id. Sed
                quis auctor vulputate hac elementum gravida cursus dis.
              </p>
              <ol>
                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                <li>
                  Eu turpis posuere semper feugiat volutpat elit, ultrices
                  suspendisse. Auctor vel in vitae placerat.
                </li>
                <li>
                  Suspendisse maecenas ac donec scelerisque diam sed est duis
                  purus.
                </li>
              </ol>
            </div>
            <div className={classes.ChoicesBottom}>
              <p>
                Vestibulum placerat magna nulla, sit amet venenatis sapien
                consequat ut. Cras pulvinar, lorem tristique pharetra finibus,
                dui erat finibus orci, a vehicula arcu sapien id metus. Quisque
                quis lorem a sem porttitor feugiat. Etiam quis congue est. Donec
                fermentum ac libero a pretium. Nulla nisl sem, euismod ut eros
                vitae, egestas scelerisque enim. Vivamus id pharetra massa.
                Nulla aliquet erat elit, a gravida dui efficitur vel. Sed
                pulvinar diam sed neque ullamcorper semper. Nulla elementum arcu
                lacus, quis porta nisl posuere varius. Quisque tempus libero sed
                urna posuere hendrerit.
              </p>
              <ul>
                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                <li>
                  Eu turpis posuere semper feugiat volutpat elit, ultrices
                  suspendisse. Auctor vel in vitae placerat.
                </li>
                <li>
                  Suspendisse maecenas ac donec scelerisque diam sed est duis
                  purus.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
