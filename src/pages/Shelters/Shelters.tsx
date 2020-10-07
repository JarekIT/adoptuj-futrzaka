import React, { useContext } from "react";

import SheltersContext from "../../data/context/shelters.context";

import { ShelterDAO } from "../../interfaces/Shelter";

const Shelters: React.FC = () => {
  const { shelters } = useContext(SheltersContext.store);

  return (
    <div>
      <h4>Lista schronisk</h4>
      {shelters.map((shelter: ShelterDAO) => {
        return (
          <div key={shelter.name}>
            {shelter.city} : {shelter.name} (kontakt: <u>{shelter.tel}</u>)
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Shelters);
