import React from "react";
import { Link } from "@reach/router";

const LikedAnimal = ({ animal }) => (
  <div className="liked-animal">
    <div className="liked-animal-image">
      <Link to={`/details/${animal.id}`}>
        <img
          src={`/images/animals/${animal.image}`}
          alt={`You liked ${animal.name}`}
        />
      </Link>
    </div>
  </div>
);

export default LikedAnimal;
