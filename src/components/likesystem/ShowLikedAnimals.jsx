import React from "react";
import LikedAnimal from "./LikedAnimal";
import LikedAnimalsShelterMap from "./LikedAnimalsSheltersMap";

const ShowLikedAnimals = ({ animals, user, shelters }) => {
  return (
    <div className="app">
      <div className="animal">
        <div id="show-liked">
          <img src="/images/misc/showLiked.png" alt="Adopt Me" />

          <p>
            {animals.length === 0 ? "Nie ma więcej zwierzaków w okolicy" : ""}
          </p>

          <div id="liked-animals">
            <p>
              {user.likedAnimals.length > 0
                ? "Zwierzaki, które polubiles:"
                : ""}
            </p>

            {user.likedAnimals.map((animal) => (
              <LikedAnimal key={animal.id} animal={animal} />
            ))}
          </div>
        </div>
      </div>
      {user.likedAnimals.length > 0 ? (
        <LikedAnimalsShelterMap user={user} shelters={shelters} />
      ) : null}
    </div>
  );
};

export default ShowLikedAnimals;
