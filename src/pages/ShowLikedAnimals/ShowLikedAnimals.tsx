import React, { useContext } from "react";
import { groupBy } from "lodash";

import LikedAnimal from "./LikedAnimal/LikedAnimal";
import LikedAnimalsShelterMap from "./LikedAnimalsSheltersMap/LikedAnimalsSheltersMap";

import { Store } from "../../data/store/Store";

import { AnimalDAO } from "../../interfaces/Animal";
import { ShelterDAO } from "../../interfaces/Shelter";

const LikedAnimals: React.FC = () => {
  const { state } = useContext(Store);
  const { animals, user, shelters } = state;

  type MapGroupedAnimals = Record<number, AnimalDAO[]>;
  type MapGroupedShelters = Record<number, ShelterDAO[]>;

  const groupedAnimalsByShelterId: MapGroupedAnimals = groupBy(
    user.likedAnimals,
    "shelterId"
  );

  const groupedSheltersById: MapGroupedShelters = groupBy(shelters, "id");

  return (
    <div className="app">
      <div className="animal">
        <div id="show-liked">
          <p>
            {animals.length === 0 ? "Nie ma więcej zwierzaków w okolicy" : ""}
          </p>

          <div id="liked-animals">
            <p>
              {user.likedAnimals.length > 0
                ? "Zwierzaki, które polubiles:"
                : "Nie ma żadnych polubionych zwierzaków"}
            </p>

            {Object.entries(groupedAnimalsByShelterId).map(
              ([shelterId, groupedAnimals]) => (
                <div>
                  <span>{groupedSheltersById[shelterId][0].name}</span>
                  <br />
                  <span>{groupedSheltersById[shelterId][0].city}</span>
                  <br />
                  {groupedAnimals.map((animal: AnimalDAO) => (
                    <LikedAnimal key={animal.id} animal={animal} />
                  ))}
                  <hr />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {user.likedAnimals.length > 0 ? <LikedAnimalsShelterMap /> : null}
    </div>
  );
};

export default React.memo(LikedAnimals);
