import classes from "./LineList.module.css";
import { useState } from "react";

const LineList = ({ cv, exibitions }) => {
  let initialNumberOfDisplayedProjects = 4;

  const [displayedCVDetails, setDisplayedCVDetails] = useState(
    cv.slice(0, initialNumberOfDisplayedProjects)
  );
  const [displayedExibitionDetails, setDisplayedExibitionDetails] = useState(
    exibitions.slice(0, initialNumberOfDisplayedProjects)
  );
  const [numberOfDisplayedCVProjects, setNumberOfDisplayedCVProjects] =
    useState(initialNumberOfDisplayedProjects);
  const [numberOfDisplayedExibitions, setNumberOfDisplayedExibitions] =
    useState(initialNumberOfDisplayedProjects);

  const updateListOfProjects = (
    displayedNumOfProjects,
    updatedNumberOfProjects,
    fullListOfProjects,
    updatedDisplayedList
  ) => {
    updatedNumberOfProjects(displayedNumOfProjects);
    const updatedListOfProjects = fullListOfProjects.slice(
      0,
      displayedNumOfProjects
    );
    updatedDisplayedList(updatedListOfProjects);
  };

  const loadMore = (projectType) => {
    let isCV = projectType === "cv";
    let displayedNumberOfProjects = isCV
      ? numberOfDisplayedCVProjects + 4
      : numberOfDisplayedExibitions + 4;
    updateListOfProjects(
      displayedNumberOfProjects,
      isCV ? setNumberOfDisplayedCVProjects : setNumberOfDisplayedExibitions,
      isCV ? cv : exibitions,
      isCV ? setDisplayedCVDetails : setDisplayedExibitionDetails
    );
  };

  return (
    <div className="container">
      <div className={classes.List}>
        <h2>CV</h2>
        {displayedCVDetails.map(({ id, title, year }) => {
          return (
            <div className={classes.LinksWrapper} key={id}>
              <span>{title}</span>
              <span>{year}</span>
            </div>
          );
        })}
        {!(displayedCVDetails.length >= cv.length) && (
          <p className={classes.Load} onClick={() => loadMore("cv")}>
            load more
          </p>
        )}
      </div>
      <div className={classes.List}>
        <h2>Exibitions</h2>
        {displayedExibitionDetails.map(
          ({ id, title, exibit_place, city, year }) => {
            return (
              <div className={classes.LinksWrapper} key={id}>
                <span>
                  {title}, {exibit_place}, {city}
                </span>
                <span>{year}</span>
              </div>
            );
          }
        )}
        {!(displayedExibitionDetails.length >= exibitions.length) && (
          <p className={classes.Load} onClick={() => loadMore("exibitions")}>
            load more
          </p>
        )}
      </div>
    </div>
  );
};

export default LineList;
