import React from "react";

const Love = ({ animal, modifySuperficialChoices }) => {
  return (
    <button
      type="button"
      onClick={() => modifySuperficialChoices(animal, "ADD_TO_LOVED_USER")}
    >
      <img src="images/misc/love.png" alt="Love Animal" />
    </button>
  );
};

export default Love;
