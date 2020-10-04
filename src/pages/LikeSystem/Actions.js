import React from "react";
import Rewind from "./actions/Rewind";
import Next from "./actions/Next";
import Like from "./actions/Like";

const Actions = ({ animal, modifySuperficialChoices }) => (
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
