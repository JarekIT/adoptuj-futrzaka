import React from "react";

import { ActionProps } from "../Actions";

import { Button, Img } from "../Actions.css";

const Rewind: React.FC<ActionProps> = ({
  animal,
  modifySuperficialChoices,
}) => {
  return (
    <Button
      type="button"
      onClick={() => modifySuperficialChoices(animal, "BACK_TO_PREVIOUS")}
    >
      <Img src="images/misc/back.png" alt="Back Animal" />
    </Button>
  );
};

export default React.memo(Rewind);
