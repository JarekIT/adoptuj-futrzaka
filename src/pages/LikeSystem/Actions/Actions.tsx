import React from "react";
import Rewind from "./action/Rewind";
import Next from "./action/Next";
import Like from "./action/Like";

import { AnimalDAO } from "../../../interfaces/Animal";

export interface ActionProps {
  animal: AnimalDAO;
  modifySuperficialChoices: (animal: AnimalDAO, actionName: string) => void;
}

const Actions: React.FC<ActionProps> = ({
  animal,
  modifySuperficialChoices,
}) => (
  <div id="actions">
    <Rewind
      animal={animal}
      modifySuperficialChoices={modifySuperficialChoices}
    />

    <Like animal={animal} modifySuperficialChoices={modifySuperficialChoices} />
    <Next animal={animal} modifySuperficialChoices={modifySuperficialChoices} />
  </div>
);

export default React.memo(Actions);
