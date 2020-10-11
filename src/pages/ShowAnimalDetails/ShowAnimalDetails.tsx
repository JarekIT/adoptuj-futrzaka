import React, { useEffect, useState, useContext } from "react";
import { RouteComponentProps } from "@reach/router";

import LikedAnimalShelterMap from "./LikedAnimalShelterMap/LikedAnimalShelterMap";
import { getDistanceBetweenPoints } from "../LikeSystem/calculateDistance";

import { Store } from "../../data/store/Store";

import { AnimalDAO } from "../../interfaces/Animal";
import { ShelterDAO } from "../../interfaces/Shelter";

interface ShowAnimalDetailsProps {
  animalId: string;
}

const ShowAnimalDetails = ({
  animalId,
}: RouteComponentProps<ShowAnimalDetailsProps>) => {
  const { state } = useContext(Store);
  const { shelters, animals, user } = state;

  const [animal, setAnimal] = useState<AnimalDAO>({} as AnimalDAO);
  const [shelter, setShelter] = useState<ShelterDAO>({} as ShelterDAO);
  const [distance, setDistance] = useState<string>("(Wpisz swoją lokalizację)");

  useEffect(() => {
    setAnimalByAnimalId();
  }, []);

  useEffect(() => {
    setShelterByAnimalId();
  }, [animal, animalId]);

  useEffect(() => {
    const newDistance: string = getDistanceBetweenPoints(user, shelter);
    setDistance(newDistance);
  }, [shelter]);

  const setAnimalByAnimalId = () => {
    animals.forEach((oneAnimal: AnimalDAO) => {
      if (oneAnimal.id === Number(animalId)) {
        setAnimal(oneAnimal);
      }
    });

    user.likedAnimals.forEach((oneAnimal: AnimalDAO) => {
      if (oneAnimal.id === Number(animalId)) {
        setAnimal(oneAnimal);
      }
    });
  };

  const setShelterByAnimalId = () => {
    shelters.forEach((oneShelter: ShelterDAO) => {
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

export default React.memo(ShowAnimalDetails);
