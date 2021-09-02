import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./Form.module.css";

export const Form = ({ onAddToList }) => {
  const { t } = useTranslation();
  const inputRef = useRef();
  const [emptyInputError, setEmptyInputError] = useState(false);

  const handleSubmit = (event) => {
    const { value } = inputRef.current;
    event.preventDefault();
    if (value) {
      setEmptyInputError(false);
      onAddToList(value.trim());
      inputRef.current.value = "";
    } else {
      setEmptyInputError(true);
    }
  };

  return (
    <div className={classes["form"]}>
      <form onSubmit={handleSubmit} className={classes["form__action"]}>
        <input type="text" ref={inputRef} className={classes["form__input"]} />
        <button className={classes["form__button"]}>{t("addButton")}</button>
      </form>
      {emptyInputError && (
        <p className={classes["form__error"]}>{t("emptyInputError")}</p>
      )}
    </div>
  );
};
