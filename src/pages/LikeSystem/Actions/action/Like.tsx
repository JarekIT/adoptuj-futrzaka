import React from "react";

import { ActionProps } from "../Actions";

const Like: React.FC<ActionProps> = ({ animal, modifySuperficialChoices }) => {
  return (
    <button
      type="button"
      onClick={() => modifySuperficialChoices(animal, "ADD_TO_LIKED_USER")}
    >
      <img src="images/misc/like.png" alt="Like Animal" />
    </button>
  );
};

export default React.memo(Like);
