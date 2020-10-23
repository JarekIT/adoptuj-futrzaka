import React from "react";
import { Link } from "@reach/router";

import { Div, Img } from "./LikedAnimal.css";

import { AnimalDAO } from "../../../interfaces/Animal";

interface LikedAnimalProps {
  animal: AnimalDAO;
}

const LikedAnimal: React.FC<LikedAnimalProps> = ({ animal }) => (
  <Div>
    <Link to={`/details/${animal.id}`}>
      <Img src={animal.image} alt={`You liked ${animal.name}`} />
    </Link>
  </Div>
);

export default React.memo(LikedAnimal);
