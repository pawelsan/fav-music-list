import classes from "./Item.module.css";

export const Item = ({ item }) => {
  return <li className={classes["list__item"]}>{item}</li>;
};
