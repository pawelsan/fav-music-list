import i18n from "i18next";
import { useTranslation } from "react-i18next";
import classes from "./Header.module.css";

export const Header = () => {
  const { t } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className={classes["header"]}>
      <h1>{t("title")}</h1>
      <select name="languages" onChange={handleChange}>
        <option value="pl">Polski</option>
        <option value="en">English</option>
      </select>
    </header>
  );
};
