import React, { useContext } from "react";

import LikedAnimal from "./LikedAnimal/LikedAnimal";
import LikedAnimalsShelterMap from "./LikedAnimalsSheltersMap/LikedAnimalsSheltersMap";

import { Store } from "../../data/store/Store";

import { AnimalDAO } from "../../interfaces/Animal";

const LikedAnimals: React.FC = () => {
  const { state } = useContext(Store);
  const { animals, user } = state;

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
                : ""}
            </p>

            {user.likedAnimals.map((animal: AnimalDAO) => (
              <LikedAnimal key={animal.id} animal={animal} />
            ))}
          </div>
        </div>
      </div>
      {user.likedAnimals.length > 0 ? <LikedAnimalsShelterMap /> : null}
    </div>
  );
};

export default React.memo(LikedAnimals);
