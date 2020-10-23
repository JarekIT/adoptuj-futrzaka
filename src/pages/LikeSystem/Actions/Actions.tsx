import React from "react";
import Back from "./action/Back";
import Next from "./action/Next";
import Like from "./action/Like";

import { ActionsStyle } from "./Actions.css";

import { AnimalDAO } from "../../../interfaces/Animal";

export interface ActionProps {
  animal: AnimalDAO;
  modifySuperficialChoices: (animal: AnimalDAO, actionName: string) => void;
}

const Actions: React.FC<ActionProps> = ({
  animal,
  modifySuperficialChoices,
}) => (
  <ActionsStyle>
    <Back animal={animal} modifySuperficialChoices={modifySuperficialChoices} />
    <Like animal={animal} modifySuperficialChoices={modifySuperficialChoices} />
    <Next animal={animal} modifySuperficialChoices={modifySuperficialChoices} />
  </ActionsStyle>
);

export default React.memo(Actions);
