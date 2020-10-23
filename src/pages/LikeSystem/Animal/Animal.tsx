import React, { useState, useEffect, useContext, Fragment } from "react";

import { Description, Info, NameAge, Photo, Img } from "./Animal.css";

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
    <Fragment>
      <Photo>
        <Img src={image} alt={name} />
      </Photo>

      <Description>
        <NameAge>
          {name} - {age} - {gender}
        </NameAge>
        <Info>
          {distance}, {shelter.city}{" "}
        </Info>
      </Description>

      <Actions
        animal={animal}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </Fragment>
  );
};

export default React.memo(Animal);
