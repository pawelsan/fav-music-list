import { useState, useEffect, Suspense } from "react";
import { Main } from "./components/Main";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { v1 as uuidv1 } from "uuid";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationsPl, translationsEn } from "./translations/translations";
import classes from "./App.module.css";

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: translationsPl },
    en: { translation: translationsEn },
  },
  lng: "pl",
  fallbackLng: "pl",
  interpolation: { escapeValue: false },
});

export const App = () => {
  const { t } = useTranslation();

  const [list, setList] = useState([]);
  const [best, setBest] = useState(null);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list"));
    const storedBest = localStorage.getItem("best");
    setList(storedList);
    setBest(storedBest);
  }, []);

  useEffect(() => {
    localStorage["list"] = JSON.stringify(list);
    console.log(localStorage.list);
  }, [list]);

  useEffect(() => {
    localStorage["best"] = best;
    console.log(localStorage.best);
  }, [best]);

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

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  console.log(list);

  return (
    <Suspense fallback="Loading...">
      <div className={classes["App"]}>
        <header className={classes["App__header"]}>
          <h1>{t("title")}</h1>
          <select name="languages" onChange={handleChange}>
            <option value="pl">Polski</option>
            <option value="en">English</option>
          </select>
        </header>
        <Main>
          <Form onAddToList={handleAddToList}></Form>
          <List
            list={list}
            best={best}
            handleAward={handleAward}
            handleDemote={handleDemote}
            handleDelete={handleDelete}
          />
        </Main>
        <footer className={classes["App__footer"]}>
          &#169;Paweł Hińcza, {new Date().getFullYear()}
        </footer>
      </div>
    </Suspense>
  );
};
