import { useState } from "react";

const useForm = (element) => {
  //   const [error, setError] = useState("");

  const submitFormHandler = (ev) => {
    ev.preventDefault();
    // console.log(element.current.value);
    // if (element.current.value.trim() === "") {
    //   setError("This field can not be empty");
    //   return;
    // }
    // if (!element.current.value.includes("@")) {
    //   setError("Email must include @ symbol");
    //   return;
    // }
    // setError("");
    // console.log("send the data");
  };

  return {
    submitFormHandler,
    error,
  };
};

export default useForm;
