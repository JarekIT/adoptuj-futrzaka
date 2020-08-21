import React, { useEffect, useState } from "react";
import LikedAnimalShelterMap from "./LikedAnimalShelterMap";
import { getDistanceBetweenPoints } from "./calculateDistance";

const ShowAnimalDetails = ({ animalId, user, shelters, animals }) => {
  const [animal, setAnimal] = useState({});
  const [shelter, setShelter] = useState({});
  const [distance, setDistance] = useState("(Wpisz swoją lokalizację)");

  useEffect(() => {
    setAnimalByAnimalId();
  }, []);

  useEffect(() => {
    setShelterByAnimalId();
  }, [animal]);

  useEffect(() => {
    const newDistance = getDistanceBetweenPoints(user, shelter);
    setDistance(newDistance);
  }, [shelter]);

  const setAnimalByAnimalId = () => {
    animals.forEach((oneAnimal) => {
      if (oneAnimal.id === Number(animalId)) {
        setAnimal(oneAnimal);
      }
    });

    user.likedAnimals.forEach((oneAnimal) => {
      if (oneAnimal.id === Number(animalId)) {
        setAnimal(oneAnimal);
      }
    });
  };

  const setShelterByAnimalId = () => {
    shelters.forEach((oneShelter) => {
      if (oneShelter.id === animal.shelterId) {
        setShelter(oneShelter);
      }
    });
  };

  return (
    <div className="liked-animal">
      <img src={animal.image} alt={`You liked ${animal.name}`} />
      <p>{`Imie: ${animal.name}`}</p>
      <p>{`Wiek: ${animal.age}`}</p>
      <p>{`Płeć: ${animal.gender}`}</p>
      <p>{`Dystans: ${distance}`}</p>
      <p>{`Opis: ${animal.desc}`}</p>

      <LikedAnimalShelterMap shelter={shelter} />
    </div>
  );
};

export default ShowAnimalDetails;
