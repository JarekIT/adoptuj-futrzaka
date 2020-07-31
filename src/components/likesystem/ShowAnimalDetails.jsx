import React, { useEffect, useState } from "react";
import LikedAnimalShelterMap from "./LikedAnimalShelterMap";

const ShowAnimalDetails = ({ animalId, user, shelters, animals }) => {
  const [animal, setAnimal] = useState({});
  const [shelter, setShelter] = useState({});

  useEffect(() => {
    setAnimalByAnimalId();
  }, []);

  useEffect(() => {
    setShelterByAnimalId();
  }, [animal]);

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

    user.lovedAnimals.forEach((oneAnimal) => {
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
      <img
        src={`/images/animals/${animal.image}`}
        alt={`You liked ${animal.name}`}
      />
      <p>{`Imie: ${animal.name}`}</p>
      <p>{`Wiek: ${animal.age}`}</p>
      <p>{`Płeć: ${animal.gender}`}</p>
      <p>{`Opis: ${animal.desc}`}</p>

      <LikedAnimalShelterMap shelter={shelter} />
    </div>
  );
};

export default ShowAnimalDetails;
