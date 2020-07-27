import React, { useState, useEffect } from "react";
import ShowLikedAnimals from "./ShowLikedAnimals.jsx";
import Animal from "./Animal";

function LikeSystem({ animals, setAnimals, user, setUser }) {
  const removedAnimalFromDataSrc = (animalSource, animalId) =>
    animalSource.filter((animal) => animal.id !== animalId);

  const modifySuperficialChoices = (animal, action) => {
    const newUser = user;
    const animalId = animal.id;

    switch (action) {
      case "ADD_TO_LIKED_USER":
        if (!user.likedAnimals.includes(animal)) {
          newUser.likedAnimals.push(animal);
          setAnimals(removedAnimalFromDataSrc(animals, animalId));
        }
        break;
      case "ADD_TO_NEXT_USER":
        if (!user.nextAnimals.includes(animal)) {
          newUser.nextAnimals.push(animal);
          setAnimals(removedAnimalFromDataSrc(animals, animalId));
        }
        break;
      case "ADD_TO_LOVED_USER":
        if (!user.lovedAnimals.includes(animal)) {
          newUser.lovedAnimals.push(animal);
          setAnimals(removedAnimalFromDataSrc(animals, animalId));
        }
        break;
      case "REWIND":
        if (user.nextAnimals.length > 0) {
          const newAnimals = [...animals];
          const lastAnimal = user.nextAnimals[user.nextAnimals.length - 1];
          newUser.nextAnimals.pop();
          newAnimals.unshift(lastAnimal);
          setAnimals(newAnimals);
        }
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
