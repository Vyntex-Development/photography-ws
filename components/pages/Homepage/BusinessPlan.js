import classes from "./BusinessPlan.module.css";
import Link from "next/link";
import { CheckmarkSvg } from "../../svg/svg";

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
            <Link href="/book-now">Book now</Link>
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
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
