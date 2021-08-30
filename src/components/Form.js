import { useRef } from "react";
import classes from "./Form.module.css";

export const Form = ({ onAddToList }) => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddToList(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className={classes["form"]}>
      <input type="text" ref={inputRef} />
      <button>Dodaj</button>
    </form>
  );
};
