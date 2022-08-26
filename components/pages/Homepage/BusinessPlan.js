import classes from "./BusinessPlan.module.css";
import { CheckmarkSvg, ScrollToTopSvg } from "../../svg/svg";
import CustomLink from "../../UI/Link";
import { useState } from "react";

const BusinessPlan = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeFirst = activeTab === 0 ? classes.AnimateTabContent : "";
  const activeSecond = activeTab === 1 ? classes.AnimateTabContent : "";
  const activeThird = activeTab === 2 ? classes.AnimateTabContent : "";

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
            <p
              className={classes.Tab}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              Event Photography
              <span
                className={`${activeTab === 0 ? classes.Active : ""}`}
              ></span>
            </p>
            <p
              className={classes.Tab}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Commercial
              <span
                className={`${activeTab === 1 ? classes.Active : ""}`}
              ></span>
            </p>
            <p
              className={classes.Tab}
              onClick={() => {
                setActiveTab(2);
              }}
            >
              Filming & Editing
              <span
                className={`${activeTab === 2 ? classes.Active : ""}`}
              ></span>
            </p>
          </div>
          {activeTab === 0 && (
            <div className={activeFirst}>
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
          )}
          {activeTab === 1 && (
            <div className={activeSecond}>
              <span>$750-$900</span>
              <p>
                Fortune 500 build your super emerging markets What&apos;s a Euro
                liquidity embracing ingenuity making bread and honey Scrooge
                McDuckin&apos; percentage.
              </p>
              <CustomLink linkType="secondary" href="/book-now">
                Book now
              </CustomLink>
            </div>
          )}
          {activeTab === 2 && (
            <div className={activeThird}>
              <span>$1000-$1250</span>
              <p>
                Fortune 500 build your super emerging markets What&apos;s a Euro
                liquidity embracing ingenuity making bread and honey Scrooge
                McDuckin&apos; percentage.
              </p>
              <CustomLink linkType="secondary" href="/book-now">
                Book now
              </CustomLink>
            </div>
          )}
          {activeTab === 0 && (
            <div className={activeFirst}>
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
          )}
          {activeTab === 1 && (
            <div className={activeSecond}>
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
          )}
          {activeTab === 2 && (
            <div className={activeThird}>
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
          )}
          {activeTab === 0 && (
            <div className={activeFirst}>
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
          )}
          {activeTab === 1 && (
            <div className={activeSecond}>
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
          )}
          {activeTab === 2 && (
            <div className={activeThird}>
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
          )}
          <ScrollToTopSvg />
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
