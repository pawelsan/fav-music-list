import { useState } from "react";
import { Tooltip } from "./Tooltip";
import classes from "./Item.module.css";

export const Item = ({ item, id, best, onAward, onDemote, onDelete }) => {
  const [show, setShow] = useState(false);
  return (
    <li
      className={
        best ? `${classes["item"]} ${classes["item--best"]}` : classes["item"]
      }
    >
      <span className={classes["item__name"]}>{item}</span>
      <div className={classes["item__action"]}>
        <span
          className={best ? classes["item__demote"] : classes["item__award"]}
          onClick={best ? onDemote : () => onAward(id)}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {best ? <>&#8600;</> : <>&#8599;</>}
          <Tooltip
            show={show}
            text={
              best ? "Usuń z best of the best" : "Dodaj jako best of the best"
            }
          />
        </span>
        <span
          className={classes["item__delete"]}
          onClick={() => onDelete(id)}
        ></span>
      </div>
    </li>
  );
};
