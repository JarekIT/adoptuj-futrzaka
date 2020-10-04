import React, { useEffect, useContext } from "react";

import SheltersContext from "data/context/shelters.context";

function Shelters() {
  const { shelters } = useContext(SheltersContext.store);

  useEffect(() => {}, [shelters]);

  return (
    <div>
      <h4>Lista schronisk</h4>
      {shelters.map((shelter) => {
        return (
          <div key={shelter.name}>
            {shelter.city} : {shelter.name} (kontakt: <u>{shelter.tel}</u>)
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(Shelters);
