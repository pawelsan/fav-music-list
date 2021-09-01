import { useState } from "react";
import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { v1 as uuidv1 } from "uuid";
import classes from "./App.module.css";

export const App = () => {
  const [list, setList] = useState([]);
  const [best, setBest] = useState(null);

  const handleAddToList = (item) => {
    console.log(item);
    setList((prevList) => [...prevList, { name: item, id: uuidv1() }]);
  };

  const handleAward = (id) => {
    console.log(id);
    setBest(id);
  };

  const handleDemote = () => {
    setBest(null);
  };

  const handleDelete = (id) => {
    console.log(id);
    setList((prevList) => [...prevList.filter((item) => item.id !== id)]);
  };

  console.log(list);

  return (
    <div className={classes["App"]}>
      <header className={classes["App__header"]}>FavMusicList</header>
      <main className={classes["App__main"]}>
        <Container>
          <Form onAddToList={handleAddToList}></Form>
          <List
            list={list}
            best={best}
            handleAward={handleAward}
            handleDemote={handleDemote}
            handleDelete={handleDelete}
          />
        </Container>
      </main>
      <footer className={classes["App__footer"]}>
        &#169;Paweł Hińcza, 2021
      </footer>
    </div>
  );
};
