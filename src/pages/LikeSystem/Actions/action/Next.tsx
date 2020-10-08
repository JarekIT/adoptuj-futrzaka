import React from "react";

import { ActionProps } from "../Actions";

const Next: React.FC<ActionProps> = ({ animal, modifySuperficialChoices }) => {
  return (
    <button
      type="button"
      onClick={() => modifySuperficialChoices(animal, "ADD_TO_NEXT_USER")}
    >
      <img src="images/misc/next.png" alt="Next Animal" />
    </button>
  );
};

export default React.memo(Next);
