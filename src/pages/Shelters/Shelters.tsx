import React, { useContext } from "react";

import { Store } from "../../data/store/Store";

import { ShelterDAO } from "../../interfaces/Shelter";

const Shelters: React.FC = () => {
  const { state } = useContext(Store);
  const { shelters } = state;

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
