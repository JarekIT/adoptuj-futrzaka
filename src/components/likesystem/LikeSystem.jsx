import React, { useState, useEffect } from "react";
import ShowLikedAnimals from "./ShowLikedAnimals.jsx";
import Animal from "./Animal";
import databaseAnimals from "./databaseAnimals.json";
import databaseUsers from "./databaseUsers.json";

function LikeSystem({ animals, setAnimals, user }) {
  const [likedAnimals, setLikedAnimals] = useState([]);
  const [lovedAnimals, setSuperLovedAnimals] = useState([]);
  const [nextAnimals, setDislikedAnimals] = useState([]);

  const removedAnimalFromDataSrc = (animalSource, animalId) =>
    animalSource.filter((animal) => animal.id !== animalId);

  const modifySuperficialChoices = (animal, action) => {
    const newLikedAnimals = [...likedAnimals];
    const newLovedAnimals = [...lovedAnimals];
    const newNextAnimals = [...nextAnimals];
    const newUser = user;
    const animalId = animal.id;

    switch (action) {
      case "ADD_TO_LIKED_USER":
        if (!user.likedAnimals.includes(animal)) {
          newUser.likedAnimals.push(animal);
          newLikedAnimals.push(databaseUsers[animalId]);

          setLikedAnimals(newLikedAnimals);
          setAnimals(removedAnimalFromDataSrc(animals, animalId));
        }
        break;
      case "ADD_TO_NEXT_USER":
        if (!user.nextAnimals.includes(animal)) {
          newUser.nextAnimals.push(animal);
          newNextAnimals.push(databaseUsers[animalId]);

          setDislikedAnimals(newNextAnimals);
          setAnimals(removedAnimalFromDataSrc(animals, animalId));
        }
        break;
      case "ADD_TO_LOVED_USER":
        if (!user.lovedAnimals.includes(animal)) {
          newUser.lovedAnimals.push(animal);
          newLovedAnimals.push(databaseUsers[animalId]);

          setSuperLovedAnimals(newLovedAnimals);
          setAnimals(removedAnimalFromDataSrc(animals, animalId));
        }
        break;
      case "REWIND":
        setAnimals(databaseAnimals);
        newUser.nextAnimals.length = 0;
        nextAnimals.length = 0;
        break;
      default:
        return animals;
    }
    console.log(`Animals left: ${animals.length}`);
    console.log(animals);
    console.log("User number 0");
    console.log(user);
  };

  // const haveIHaveAnimalToWatch = ({ animals }) => {
  //   const haveISeenThatAnimal = (animal) => {
  //     return !user.likedAnimals.includes(animal) &&
  //       !user.lovedAnimals.includes(animal) &&
  //       !user.nextAnimals.includes(animal)
  //       ? true
  //       : false;
  //   };

  //   return animals[0] && haveISeenThatAnimal(animals[0]);
  // };

  return (
    <div className="app">
      {animals[0] ? (
        // {haveIHaveAnimalToWatch({ animals }) ? (
        <Animal
          key={animals[0].id}
          animal={animals[0]}
          modifySuperficialChoices={modifySuperficialChoices}
        />
      ) : (
        <ShowLikedAnimals user={user} animals={animals} />
      )}
    </div>
  );
}

export default LikeSystem;
