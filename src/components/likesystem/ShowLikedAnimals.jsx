import React from "react";
import LikedAnimal from "./LikedAnimal";

const ShowLikedAnimals = ({ animals, user }) => {
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
              {user.lovedAnimals.length > 0
                ? "Zwierzaki, które pokochałeś:"
                : ""}
            </p>

            {user.lovedAnimals.map((animal) => (
              <LikedAnimal key={animal.id} animal={animal} />
            ))}

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
    </div>
  );
};

export default ShowLikedAnimals;
