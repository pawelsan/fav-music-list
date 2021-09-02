import { Select } from "./Select";
import { useTranslation } from "react-i18next";
import classes from "./Header.module.css";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={classes["header"]}>
      <h1>{t("title")}</h1>
      <Select />
    </header>
  );
};
