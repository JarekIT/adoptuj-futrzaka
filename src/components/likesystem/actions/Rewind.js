import React from "react";

const Rewind = ({ animalId, modifySuperficialChoices }) => {
  return (
    <button
      type="button"
      onClick={() => modifySuperficialChoices(animalId, "REWIND")}
    >
      <img src="images/misc/rewind.png" alt="Rewind Animal" />
    </button>
  );
};

export default Rewind;
