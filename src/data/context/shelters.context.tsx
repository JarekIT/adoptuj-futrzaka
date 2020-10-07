import React, { createContext, useState } from "react";

import mockData from "../mocks/databaseShelters";

import { ShelterDAO } from "../../interfaces/Shelter";

interface ISheltersContext {
  shelters: ShelterDAO[];
  setShelters: React.Dispatch<React.SetStateAction<ShelterDAO[]>>;
}

const store = createContext({} as ISheltersContext);

const { Provider } = store;

function SheltersProvider({ children }: { children: JSX.Element }) {
  const [shelters, setShelters] = useState<ShelterDAO[]>(mockData);

  return (
    <Provider
      value={{
        shelters,
        setShelters,
      }}
    >
      {children}
    </Provider>
  );
}

const SheltersContext = {
  store,
  SheltersProvider,
};

export default SheltersContext;
