import React, { Fragment } from "react";

import LikedAnimal from "../LikedAnimal/LikedAnimal";

import { AnimalDAO } from "../../../interfaces/Animal";
import { groupedAnimalsByShelterIdType } from "../ShowLikedAnimals";

interface IShowLikedAnimalsView {
  groupedAnimalsToView: groupedAnimalsByShelterIdType[];
}

const ShowLikedAnimalsView: React.FC<IShowLikedAnimalsView> = ({
  groupedAnimalsToView,
}) => {
  return (
    <Fragment>
      {groupedAnimalsToView.map(([shelter, animals]) => (
        <div key={shelter.id}>
          <span>{shelter.name}</span>
          <br />
          <span>{shelter.city}</span>
          <br />
          {animals.map((animal: AnimalDAO) => (
            <LikedAnimal key={animal.id} animal={animal} />
          ))}
        </div>
      ))}
    </Fragment>
  );
};

export default React.memo(ShowLikedAnimalsView);
