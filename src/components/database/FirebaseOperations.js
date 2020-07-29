import React from "react";
import firebase from "./firebase";

const LoadDogs = ({ animals, setAnimals, user, setUser }) => {
  function indexOfRecentEntry(arr) {
    if (arr.length === 0) {
      return -1;
    }

    var max = arr[0].date.seconds;
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
      if (arr[i].date.seconds > max) {
        maxIndex = i;
        max = arr[i].date.seconds;
      }
    }
    console.log(
      `Znaleziono najnowszy wpis numer ${maxIndex} z ${arr.length} wpisów`
    );
    return maxIndex;
  }

  const handleSaveAnimalsOnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    firebase.firestore().collection("Animals").add({
      animals: animals,
      date: new Date(),
    });
    console.log("Zapisalem Animals do firebase");
    console.log(animals);
  };

  const handleLoadAnimalsOnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    firebase
      .firestore()
      .collection("Animals")
      .get()
      .then((animalsFromDb) => {
        const loadedAnimals = animalsFromDb.docs.map((animalFromDb) =>
          animalFromDb.data()
        )[0].animals;
        console.log(loadedAnimals);
        setAnimals(loadedAnimals);
      });
  };

  const handleDeleteAnimalsOnClick = () => {
    setAnimals([]);
  };

  const handleSaveUserOnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    firebase.firestore().collection("User").add({
      user: user,
      date: new Date(),
    });
    console.log("Zapisalem User do firebase");
    console.log(user);
  };

  const handleLoadUserOnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    firebase
      .firestore()
      .collection("User")
      .get()
      .then((usersFromDb) => {
        const loadedUsers = usersFromDb.docs.map((userFromDb) =>
          userFromDb.data()
        );
        console.log(loadedUsers);
        const loadedUser = loadedUsers[indexOfRecentEntry(loadedUsers)].user;
        console.log(loadedUser);
        setUser(loadedUser);
      });
  };

  const handleResetUserOnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    firebase
      .firestore()
      .collection("NewUser")
      .get()
      .then((usersFromDb) => {
        const loadedUser = usersFromDb.docs.map((userFromDb) =>
          userFromDb.data()
        )[0].user;
        console.log(loadedUser);
        setUser(loadedUser);
      });
  };

  return (
    <>
      <p>Panel Admina (tymczasowo widoczny)(nie klikac)</p>
      <button disabled onClick={handleSaveAnimalsOnClick}>
        Dodaj Animals do firebase
      </button>
      <button onClick={handleLoadAnimalsOnClick}>
        Wczytaj Animals z firebase
      </button>
      <button onClick={handleDeleteAnimalsOnClick}>
        Usun Animals ze strony
      </button>

      <br />
      <br />

      <button onClick={handleSaveUserOnClick}>Dodaj User do firebase</button>
      <button onClick={handleLoadUserOnClick}>Wczytaj User z firebase</button>
      <button onClick={handleResetUserOnClick}>Zresetuj User</button>

      <hr />
    </>
  );
};

export default LoadDogs;
