import React, { useState, useEffect } from "react";
import firebase from "../database/firebase";

const AddRandomGeneratedAnimal = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    getRandomCatImage();
  }, []);

  const getRandomCatImage = async () => {
    await fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((response) => {
        setUrl(response[0].url);
      });
  };

  const handleSaveAnimalsOnClick = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    let numberOfAnimalsInDb;
    await firebase
      .firestore()
      .collection("Animal")
      .get()
      .then((animalsFromDb) => {
        console.log("Liczba zwierząt: ", animalsFromDb.docs.length);
        numberOfAnimalsInDb = animalsFromDb.docs.length;
      });

    function getRandomGender() {
      return Math.floor(Math.random() * 10) + 1 > 5 ? "samiec" : "samica";
    }

    await firebase
      .firestore()
      .collection("Animal")
      .add({
        id: numberOfAnimalsInDb,
        name: "Imie kota",
        desc: "Opis kota",
        age: Math.floor(Math.random() * 11),
        image: url,
        likedBy: [],
        type: "cat",
        gender: getRandomGender(),
        shelterId: Math.floor(Math.random() * 4) + 1,
        date: new Date(),
      });
  };

  return (
    <div>
      <br />
      {url ? (
        <button onClick={(event) => handleSaveAnimalsOnClick(event)}>
          Mozesz juz dodac wygenerowanego kota
        </button>
      ) : (
        <p>Poczekaj na załadowanie się adresu URL kota</p>
      )}
    </div>
  );
};

export default AddRandomGeneratedAnimal;
