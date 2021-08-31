import { useState } from "react";
import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { List } from "./components/List";
import classes from "./App.module.css";

export const App = () => {
  const [list, setList] = useState([]);

  const handleAddToList = (item) => {
    console.log(item);
    setList((prevList) => [...prevList, item]);
  };

  const handleAward = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
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
            handleAward={handleAward}
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
