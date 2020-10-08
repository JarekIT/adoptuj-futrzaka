import React from "react";
import { Link } from "@reach/router";

import { AnimalDAO } from "../../../interfaces/Animal";

interface LikedAnimalProps {
  animal: AnimalDAO;
}

const LikedAnimal: React.FC<LikedAnimalProps> = ({ animal }) => (
  <div className="liked-animal">
    <div className="liked-animal-image">
      <Link to={`/details/${animal.id}`}>
        <img src={animal.image} alt={`You liked ${animal.name}`} />
      </Link>
    </div>
  </div>
);

export default React.memo(LikedAnimal);
