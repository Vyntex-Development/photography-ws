import classes from "./TextArea.module.css";

const TextArea = (props) => {
  return (
    <div className={classes.TextArea}>
      <textarea rows="14" {...props}></textarea>
    </div>
  );
};

export default TextArea;
