import { Item } from "./Item";
import classes from "./List.module.css";

export const List = ({ list }) => {
  return (
    <ul className={classes["list"]}>
      {list.length ? (
        list.map((item, index) => <Item key={index} item={item} />)
      ) : (
        <p>Brak elementów w liście</p>
      )}
    </ul>
  );
};
