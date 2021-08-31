import classes from "./Item.module.css";

export const Item = ({ item, id, onAward, onDelete }) => {
  return (
    <li className={classes["item"]}>
      <span className={classes["item__name"]}>{item}</span>
      <div className={classes["item__action"]}>
        <span className={classes["item__award"]} onClick={() => onAward(id)}>
          &#128077;
        </span>
        <span className={classes["item__delete"]} onClick={() => onDelete(id)}>
          X
        </span>
      </div>
    </li>
  );
};
