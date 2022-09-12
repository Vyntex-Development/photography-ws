import classes from "./Button.module.css";

const Button = ({ type, children, btnType, onClick }) => {
  let btnClasses;

  if (btnType === "primary") {
    btnClasses = classes.Primary;
  }

  if (btnType === "secondary") {
    btnClasses = classes.Secondary;
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${classes.Btn} ${btnClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
