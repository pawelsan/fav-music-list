import { Item } from "./Item";

export const List = ({ list }) => {
  return (
    <ul>
      {list.length &&
        list.map((item, index) => <Item key={index} item={item} />)}
    </ul>
  );
};
