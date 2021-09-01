import { Item } from "./Item";
import classes from "./List.module.css";

export const List = ({
  list,
  best,
  handleAward,
  handleDemote,
  handleDelete,
}) => {
  return (
    <ul className={classes["list"]}>
      {list.length ? (
        list.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            best={item.id === best}
            item={item.name}
            onAward={handleAward}
            onDemote={handleDemote}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>Brak elementów w liście</p>
      )}
    </ul>
  );
};
