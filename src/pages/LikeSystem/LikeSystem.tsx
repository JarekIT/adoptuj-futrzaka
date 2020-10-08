import React, { useEffect, useContext, Fragment } from "react";
import ShowLikedAnimals from "../ShowLikedAnimals/ShowLikedAnimals";
import Animal from "./Animal/Animal";
import { getFilteredAnimal } from "./filters/filter";
import { updateUser } from "../../components/database/FirebaseOperationsUser";
import { loadAllAnimals } from "../../components/database/FirebaseOperationsAnimals";
import { filterAllAnimals } from "./filters/filter";

import SheltersContext from "../../data/context/shelters.context";
import AnimalsContext from "../../data/context/animals.context";
import UserContext from "../../data/context/user.context";

import { AnimalDAO } from "../../interfaces/Animal";
import { UserDAO } from "../../interfaces/User.js";

function LikeSystem() {
  const { shelters } = useContext(SheltersContext.store);
  const { animals, setAnimals } = useContext(AnimalsContext.store);
  const { allAnimals, setAllAnimals } = useContext(AnimalsContext.store);
  const { user, setUser } = useContext(UserContext.store);

  useEffect(() => {
    loadAllAnimals(setAllAnimals, setAnimals);
  }, []);

  useEffect(() => {
    console.log("nowe filtry !!!!");
    console.log(user);
    filterAllAnimals({ allAnimals, user, setAnimals, shelters });
  }, [user]);

  useEffect(() => {
    shuffleArray(animals);
  }, [animals]);

  const removedAnimalFromDataSrc = (
    animalSource: AnimalDAO[],
    animalId: number
  ): AnimalDAO[] =>
    animalSource.filter((animal: AnimalDAO) => animal.id !== animalId);

  const modifySuperficialChoices = (animal: AnimalDAO, action: string) => {
    const newUser: UserDAO = { ...user };
    const animalId: number = animal.id;

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
      case "REWIND":
        if (user.nextAnimals.length > 0) {
          const newAnimals: AnimalDAO[] = [...animals];
          const lastAnimal: AnimalDAO =
            user.nextAnimals[user.nextAnimals.length - 1];
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

    setUser(newUser);
    if (user.id !== null) updateUser(newUser);
  };

  const shuffleArray = (array: AnimalDAO[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const nextAnimal: AnimalDAO | boolean = getFilteredAnimal(animals, user);

  return (
    <div>
      {nextAnimal ? (
        <Fragment>
          <Animal
            key={nextAnimal.id}
            animal={nextAnimal}
            modifySuperficialChoices={modifySuperficialChoices}
          />
        </Fragment>
      ) : (
        <ShowLikedAnimals />
      )}
    </div>
  );
}

export default React.memo(LikeSystem);