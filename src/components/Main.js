import React from "react";
import classes from "./Main.module.css";

export const Main = ({ children }) => (
  <main className={classes["main"]}>{children}</main>
);
