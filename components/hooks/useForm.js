import { useState } from "react";

const useForm = (inputElements) => {
  const [modifiedInputElements, setModifiedInputElements] =
    useState(inputElements);

  const submitFormHandler = (ev) => {
    ev.preventDefault();

    let modifiedInputElements = inputElements.map(({ el }, i) => {
      if (el.current.value.trim() === "") {
        return { el, error: "This field can not be empty" };
      }

      if (el.current.id === "email" && !el.current.value.includes("@")) {
        return { el, error: "Please include @ symbol" };
      }

      return { el, error: "" };
    });

    setModifiedInputElements(modifiedInputElements);

    if (!modifiedInputElements.some((el) => el.error)) {
      console.log("send the data");
    }
  };

  return {
    submitFormHandler,
    modifiedInputElements,
  };
};

export default useForm;
