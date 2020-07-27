import React, { useEffect } from "react";
import ShowLikedAnimals from "./ShowLikedAnimals.jsx";
import Animal from "./Animal";
import { haveIGotAnimalToWatch } from "./filters/filter";

function LikeSystem({ animals, setAnimals, user, setUser }) {
  useEffect(() => {
    shuffleArray(animals);
  }, []);

  const removedAnimalFromDataSrc = (animalSource, animalId) =>
    animalSource.filter((animal) => animal.id !== animalId);

  const modifySuperficialChoices = (animal, action) => {
    const newUser = user;
    const animalId = animal.id;

    switch (action) {
      case "ADD_TO_LIKED_USER":
        if (!user.likedAnimals.includes(animal)) {
          newUser.likedAnimals.push(animal);
          newUser.viewedAnimals.push(animalId);
          setAnimals(removedAnimalFromDataSrc(animals, animalId));
        }
        break;
      case "ADD_TO_NEXT_USER":
        if (!user.nextAnimals.includes(animal)) {
          newUser.nextAnimals.push(animal);
          newUser.viewedAnimals.push(animalId);
          setAnimals(removedAnimalFromDataSrc(animals, animalId));
        }
        break;
      case "ADD_TO_LOVED_USER":
        if (!user.lovedAnimals.includes(animal)) {
          newUser.lovedAnimals.push(animal);
          newUser.viewedAnimals.push(animalId);
          setAnimals(removedAnimalFromDataSrc(animals, animalId));
        }
        break;
      case "REWIND":
        if (user.nextAnimals.length > 0) {
          const newAnimals = [...animals];
          const lastAnimal = user.nextAnimals[user.nextAnimals.length - 1];
          newUser.nextAnimals.pop();
          newUser.viewedAnimals.pop();
          newAnimals.unshift(lastAnimal);
          setAnimals(newAnimals);
        }
        break;
      default:
        return animals;
    }

    console.log(`Animals left: ${animals.length}`);
    console.log(animals);
    console.log("User  details:");
    console.log(user);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <div className="app">
      {haveIGotAnimalToWatch(animals, user) ? (
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
