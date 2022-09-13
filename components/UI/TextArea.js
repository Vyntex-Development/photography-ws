import classes from "./TextArea.module.css";

const TextArea = (props) => {
  return (
    <div className={classes.TextArea}>
      <textarea rows="11" {...props}></textarea>
    </div>
  );
};

export default TextArea;
