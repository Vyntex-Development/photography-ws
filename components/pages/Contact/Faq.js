import { OpenSvg, ClosedSvg } from "../../svg/svg";
import classes from "./Faq.module.css";
import { useState } from "react";

const Faq = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className={classes.Faq}>
        <div className={classes.Question} onClick={() => setActive(0)}>
          <p className={`${active === 0 ? classes.Active : ""}`}>
            At what point in my project should I involve an architect?
          </p>
          {active !== 0 && <ClosedSvg />}
          {active === 0 && <OpenSvg />}
        </div>
        <div
          className={`${classes.Answer} ${active === 0 ? classes.Open : ""}`}
        >
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada. Proin dolor sapien, placerat non
            rhoncus feugiat, ullamcorper vel massa.
          </p>
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada. Proin dolor sapien, placerat non
            rhoncus feugiat, ullamcorper vel massa.
          </p>
        </div>
      </div>
      <div className={classes.Faq}>
        <div className={classes.Question} onClick={() => setActive(1)}>
          <p className={`${active === 1 ? classes.Active : ""}`}>
            How do I find the right architect for my project?
          </p>
          {active !== 1 && <ClosedSvg />}
          {active === 1 && <OpenSvg />}
        </div>
        <div
          className={`${classes.Answer} ${active === 1 ? classes.Open : ""}`}
        >
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada. Proin dolor sapien, placerat non
            rhoncus feugiat, ullamcorper vel massa.
          </p>
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada. Proin dolor sapien, placerat non
            rhoncus feugiat, ullamcorper vel massa.
          </p>
        </div>
      </div>
      <div className={classes.Faq}>
        <div className={classes.Question} onClick={() => setActive(2)}>
          <p className={`${active === 2 ? classes.Active : ""}`}>
            Don't architects add substantial cost to a project?
          </p>
          {active !== 2 && <ClosedSvg />}
          {active === 2 && <OpenSvg />}
        </div>
        <div
          className={`${classes.Answer} ${active === 2 ? classes.Open : ""}`}
        >
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada. Proin dolor sapien, placerat non
            rhoncus feugiat, ullamcorper vel massa.
          </p>
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada. Proin dolor sapien, placerat non
            rhoncus feugiat, ullamcorper vel massa.
          </p>
        </div>
      </div>
      <div className={classes.Faq}>
        <div className={classes.Question} onClick={() => setActive(3)}>
          <p className={`${active === 3 ? classes.Active : ""}`}>
            How are architects compensated?
          </p>
          {active !== 3 && <ClosedSvg />}
          {active === 3 && <OpenSvg />}
        </div>
        <div
          className={`${classes.Answer} ${active === 3 ? classes.Open : ""}`}
        >
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada. Proin dolor sapien, placerat non
            rhoncus feugiat, ullamcorper vel massa.
          </p>
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada. Proin dolor sapien, placerat non
            rhoncus feugiat, ullamcorper vel massa.
          </p>
        </div>
      </div>
      <div className={classes.Faq}>
        <div className={classes.Question} onClick={() => setActive(4)}>
          <p className={`${active === 4 ? classes.Active : ""}`}>
            What's my role in the design process?
          </p>
          {active !== 4 && <ClosedSvg />}
          {active === 4 && <OpenSvg />}
        </div>
        <div
          className={`${classes.Answer} ${active === 4 ? classes.Open : ""}`}
        >
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada. Proin dolor sapien, placerat non
            rhoncus feugiat, ullamcorper vel massa.
          </p>
          <p>
            Maecenas efficitur magna nulla, nec volutpat sem convallis quis. Nam
            molestie venenatis malesuada. Proin dolor sapien, placerat non
            rhoncus feugiat, ullamcorper vel massa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
