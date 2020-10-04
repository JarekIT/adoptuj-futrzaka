import React from "react";

const Like = ({ animal, modifySuperficialChoices }) => {
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
