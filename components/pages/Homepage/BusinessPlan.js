import classes from "./BusinessPlan.module.css";
import { CheckmarkSvg } from "../../svg/svg";
import CustomLink from "../../UI/Link";
import Link from "next/link";

const BusinessPlan = () => {
  return (
    <div className={classes.BusinessPlan}>
      <div className="container">
        <div className={classes.grid}>
          <div>
            <h2>The Right Plan for Your Business</h2>
          </div>
          <div>
            <p>
              We have several powerful plans to showcase your business and get
              discovered as a creative entrepreneurs
            </p>
          </div>
          <div>
            <p>Event Photography</p>
            <p>Commercial</p>
            <p>Filming & Editing</p>
          </div>
          <div>
            <span>$250-$650</span>
            <p>
              Fortune 500 build your super emerging markets What&apos;s a Euro
              liquidity embracing ingenuity making bread and honey Scrooge
              McDuckin&apos; percentage.
            </p>
            <CustomLink linkType="secondary" href="/book-now">
              Book now
            </CustomLink>
          </div>
          <div>
            <ul>
              <li>
                <CheckmarkSvg /> 1 Hour Session
              </li>
              <li>
                <CheckmarkSvg /> Up to 2 Outer Locations
              </li>
              <li>
                <CheckmarkSvg /> 20 Digital Images
              </li>
              <li>
                <CheckmarkSvg /> Up to 2 Outer Locations
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <CheckmarkSvg /> Professional Editing
              </li>
              <li>
                <CheckmarkSvg /> Online Gallery
              </li>
              <li>
                <CheckmarkSvg /> 12x12 Laylat Album
              </li>
              <li>
                <CheckmarkSvg /> Professional Editing
              </li>
            </ul>
          </div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <path
              d="M23.9373 40L23.9373 8M23.9373 8C23.9373 13.5338 26.1124 16.1805 27.2 16.6617M23.9373 8C23.9373 13.4135 21.8458 16.0201 20.8 16.6617"
              stroke="#779593"
            />
            <path
              d="M48 46H0V50H48V46Z"
              fill="#779593"
              mask="url(#path-1-inside-1_12_180)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
