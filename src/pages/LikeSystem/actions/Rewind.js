import React from "react";

const Rewind = ({ animal, modifySuperficialChoices }) => {
  return (
    <button
      type="button"
      onClick={() => modifySuperficialChoices(animal, "REWIND")}
    >
      <img src="images/misc/rewind.png" alt="Rewind Animal" />
    </button>
  );
};

export default React.memo(Rewind);
