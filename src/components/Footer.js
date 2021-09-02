import React from "react";
import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      &#169;Paweł Hińcza, {new Date().getFullYear()}
    </footer>
  );
};
