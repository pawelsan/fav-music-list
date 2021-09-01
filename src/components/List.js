import { Item } from "./Item";
import classes from "./List.module.css";

export const List = ({ list, handleAward, handleDelete }) => {
  return (
    <ul className={classes["list"]}>
      {list.length ? (
        list.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            item={item.name}
            onAward={handleAward}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>Brak elementów w liście</p>
      )}
    </ul>
  );
};
