import React, { useState, useEffect, useContext } from "react";

import Actions from "../Actions/Actions";
import { getDistanceBetweenPoints } from "../calculateDistance";

import { Store } from "../../../data/store/Store";

import { AnimalDAO } from "../../../interfaces/Animal";
import { ShelterDAO } from "../../../interfaces/Shelter";

interface AnimalProps {
  animal: AnimalDAO;
  modifySuperficialChoices: (animal: AnimalDAO, action: string) => void;
}

const Animal = ({ animal, modifySuperficialChoices }: AnimalProps) => {
  const { state } = useContext(Store);
  const { shelters, user } = state;

  const { name, age, image, gender }: AnimalDAO = animal;
  const [distance, setDistance] = useState<string>("(Wpisz swoją lokalizację)");
  const [shelter, setShelter] = useState<ShelterDAO>({} as ShelterDAO);

  useEffect(() => {
    setShelterByAnimalId();
  }, []);

  const setShelterByAnimalId = () => {
    shelters.forEach((oneShelter: ShelterDAO) => {
      if (oneShelter.id === animal.shelterId) {
        const newDistance = getDistanceBetweenPoints(user, oneShelter);
        setShelter(oneShelter);
        setDistance(newDistance);
      }
    });
  };

  return (
    <div className="animal">
      <div className="animal-photo">
        <img src={image} alt={name} />
      </div>

      <div className="animal-description">
        <p className="animal-name-age">
          {name}, <span>{age}</span>, <span>{gender}</span>
        </p>
        <p className="animal-info">
          {distance}, {shelter.city}{" "}
        </p>
      </div>

      <Actions
        animal={animal}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </div>
  );
};

export default React.memo(Animal);
