import React from "react";

import { ActionProps } from "../Actions";

const Rewind: React.FC<ActionProps> = ({
  animal,
  modifySuperficialChoices,
}) => {
  return (
    <button
      type="button"
      onClick={() => modifySuperficialChoices(animal, "BACK_TO_PREVIOUS")}
    >
      <img src="images/misc/back.png" alt="Back Animal" />
    </button>
  );
};

export default React.memo(Rewind);
