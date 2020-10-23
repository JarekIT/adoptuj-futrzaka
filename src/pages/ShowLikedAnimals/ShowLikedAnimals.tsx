import React, { Fragment, useContext, useEffect, useState } from "react";
import * as lodash from "lodash";

import LikedAnimalsShelterMap from "./LikedAnimalsSheltersMap/LikedAnimalsSheltersMap";
import ShowLikedAnimalsView from "./ShowLikedAnimalsView/ShowLikedAnimalsView";

import { Store } from "../../data/store/Store";

import { AnimalDAO } from "../../interfaces/Animal";
import { ShelterDAO } from "../../interfaces/Shelter";

export type groupedAnimalsByShelterIdType = [ShelterDAO, AnimalDAO[]];

const LikedAnimals: React.FC = () => {
  const { state } = useContext(Store);
  const { animals, user, shelters } = state;

  const [groupedAnimalsToView, setGroupedAnimalsToView] = useState<
    groupedAnimalsByShelterIdType[]
  >([]);

  type MapGroupedAnimals = Record<number, AnimalDAO[]>;
  type MapGroupedShelters = Record<number, ShelterDAO[]>;

  const groupedAnimalsByShelterId: MapGroupedAnimals = lodash.groupBy(
    user.likedAnimals,
    "shelterId"
  );

  const groupedSheltersById: MapGroupedShelters = lodash.groupBy(
    shelters,
    "id"
  );

  useEffect(() => {
    modifyGroupedAnimalsByShelterIdToArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modifyGroupedAnimalsByShelterIdToArray: () => void = () => {
    const newGroupedAnimalsToView: groupedAnimalsByShelterIdType[] = [];
    Object.entries(groupedAnimalsByShelterId).map(
      // eslint-disable-next-line array-callback-return
      ([shelterId, groupedAnimals]) => {
        const entryToPush: groupedAnimalsByShelterIdType = [
          groupedSheltersById[shelterId][0],
          groupedAnimals,
        ];
        newGroupedAnimalsToView.push(entryToPush);
      }
    );
    setGroupedAnimalsToView(newGroupedAnimalsToView);
  };

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

            {groupedAnimalsToView.length > 0 ? (
              <ShowLikedAnimalsView
                groupedAnimalsToView={groupedAnimalsToView}
              />
            ) : null}
          </div>
        </div>
      </div>
      {user.likedAnimals.length > 0 ? <LikedAnimalsShelterMap /> : null}
    </div>
  );
};

export default React.memo(LikedAnimals);
