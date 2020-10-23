import React from "react";

import Action from "./Action/Action";

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
    <Action
      handleClick={() => modifySuperficialChoices(animal, "BACK_TO_PREVIOUS")}
      src="images/misc/back.png"
      alt="Back Animal"
    />
    <Action
      handleClick={() => modifySuperficialChoices(animal, "ADD_TO_LIKED_USER")}
      src="images/misc/love.png"
      alt="Like Animal"
    />
    <Action
      handleClick={() => modifySuperficialChoices(animal, "ADD_TO_NEXT_USER")}
      src="images/misc/next.png"
      alt="Next Animal"
    />
  </ActionsStyle>
);

export default React.memo(Actions);
