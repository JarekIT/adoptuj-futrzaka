import React from "react";
import Actions from "./Actions";

const Animal = ({ animal, modifySuperficialChoices }) => {
  const { name, desc, age, image, gender } = animal;

  return (
    <div className="animal">
      <div className="animal-photo">
        <img src={`/images/animals/${image}`} alt={name} />
      </div>

      <div className="animal-description">
        <p className="animal-name-age">
          {name}, <span>{age}</span>, <span>{gender}</span>
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
