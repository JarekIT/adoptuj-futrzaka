import React from "react";

import { ActionProps } from "../Actions";

const Rewind: React.FC<ActionProps> = ({
  animal,
  modifySuperficialChoices,
}) => {
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
