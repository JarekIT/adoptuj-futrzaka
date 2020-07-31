import React, { useState, useEffect } from "react";
import Actions from "./Actions";
import { getDistanceBetweenPoints } from "./calculateDistance";

const Animal = ({ animal, modifySuperficialChoices, user, shelters }) => {
  const { name, desc, age, image, gender } = animal;
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    setShelterByAnimalId();
  }, []);

  const setShelterByAnimalId = () => {
    shelters.forEach((oneShelter) => {
      if (oneShelter.id === animal.shelterId) {
        const newDistance = getDistanceBetweenPoints(user, oneShelter);
        setDistance(newDistance);
      }
    });
  };

  return (
    <div className="animal">
      <div className="animal-photo">
        <img src={`/images/animals/${image}`} alt={name} />
      </div>

      <div className="animal-description">
        <p className="animal-name-age">
          {name}, <span>{age}</span>, <span>{gender}</span>,{" "}
          <span>{distance}</span> km od Ciebie
        </p>
        <p className="animal-info">{desc}</p>
      </div>

      <Actions
        animal={animal}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </div>
  );
};

export default Animal;
