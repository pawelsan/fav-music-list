import { useRef } from "react";
import classes from "./Form.module.css";

export const Form = ({ onAddToList }) => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddToList(inputRef.current.value.trim());
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className={classes["form"]}>
      <input type="text" ref={inputRef} className={classes["form__input"]} />
      <button className={classes["form__button"]}>Dodaj</button>
    </form>
  );
};
