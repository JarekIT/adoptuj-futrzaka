import React, { useState, useEffect, useContext } from "react";

import Actions from "./Actions";
import { getDistanceBetweenPoints } from "./calculateDistance";

import SheltersContext from "data/context/shelters.context";
import UserContext from "data/context/user.context";

const Animal = ({ animal, modifySuperficialChoices }) => {
  const { shelters } = useContext(SheltersContext.store);
  const { user } = useContext(UserContext.store);

  const { name, age, image, gender } = animal;
  const [distance, setDistance] = useState("(Wpisz swoją lokalizację)");
  const [shelter, setShelter] = useState({});

  useEffect(() => {
    setShelterByAnimalId();
  }, []);

  const setShelterByAnimalId = () => {
    shelters.forEach((oneShelter) => {
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

export default Animal;
