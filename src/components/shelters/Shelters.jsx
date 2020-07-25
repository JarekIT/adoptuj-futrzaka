import React, { useEffect } from "react";

function Shelters({ shelters }) {
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

export default Shelters;
