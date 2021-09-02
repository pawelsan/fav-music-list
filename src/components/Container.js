import classes from "./Container.module.css";

export const Main = ({ children }) => (
  <main className={classes["main"]}>{children}</main>
);
