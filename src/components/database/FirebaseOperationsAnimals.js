import React from "react";
import firebase from "./firebase";

const LoadAnimals = ({ setAnimals, setAllAnimals }) => {
  return (
    <div>
      <br />
      <button onClick={() => loadAllAnimals({ setAllAnimals })}>
        (test) Wczytaj Wszystkie Zwierzeta
      </button>
      <br />
    </div>
  );
};

const loadAllAnimals = async ({ setAllAnimals, setAnimals }) => {
  console.log("wczytuje koty z firebase ;)");
  await firebase
    .firestore()
    .collection("Animal")
    .get()
    .then((animalsFromDb) => {
      let newAllAnimals = [];
      animalsFromDb.docs.map((animalFromDb) => {
        newAllAnimals.push(animalFromDb.data());
      });
      console.log(newAllAnimals);
      setAllAnimals(newAllAnimals);
      setAnimals(newAllAnimals);
    });
};

export { LoadAnimals as default, loadAllAnimals };
