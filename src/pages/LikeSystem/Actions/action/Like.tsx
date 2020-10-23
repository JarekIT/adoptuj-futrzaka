import React from "react";

import { ActionProps } from "../Actions";

import { Button, Img } from "../Actions.css";

const Like: React.FC<ActionProps> = ({ animal, modifySuperficialChoices }) => {
  return (
    <Button
      type="button"
      onClick={() => modifySuperficialChoices(animal, "ADD_TO_LIKED_USER")}
    >
      <Img src="images/misc/like.png" alt="Like Animal" />
    </Button>
  );
};

export default React.memo(Like);
