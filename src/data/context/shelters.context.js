import React, { createContext, useState } from "react";

import mockData from "../mocks/databaseShelters";

const initialValue = {};

const store = createContext(initialValue);

const { Provider } = store;

function SheltersProvider({ children }) {
  const [shelters, setShelters] = useState(mockData);

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
