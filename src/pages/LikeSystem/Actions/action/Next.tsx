import React from "react";

import { ActionProps } from "../Actions";

import { Button, Img } from "../Actions.css";

const Next: React.FC<ActionProps> = ({ animal, modifySuperficialChoices }) => {
  return (
    <Button
      type="button"
      onClick={() => modifySuperficialChoices(animal, "ADD_TO_NEXT_USER")}
    >
      <Img src="images/misc/next.png" alt="Next Animal" />
    </Button>
  );
};

export default React.memo(Next);
