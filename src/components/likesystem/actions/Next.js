import React from "react";

const Next = ({ animal, modifySuperficialChoices }) => {
  return (
    <button
      type="button"
      onClick={() => modifySuperficialChoices(animal, "ADD_TO_NEXT_USER")}
    >
      <img src="images/misc/next.png" alt="Next Animal" />
    </button>
  );
};

export default Next;
