import React, { createContext, useState } from "react";

import databaseAnimals from "../../data/mocks/databaseAnimals.json";

const initialValue = {};

const store = createContext(initialValue);

const { Provider } = store;

function AnimalsProvider({ children }) {
  const [allAnimals, setAllAnimals] = useState(databaseAnimals);
  const [animals, setAnimals] = useState(databaseAnimals);

  return (
    <Provider
      value={{
        animals,
        setAnimals,
        allAnimals,
        setAllAnimals,
      }}
    >
      {children}
    </Provider>
  );
}

const AnimalsContext = {
  store,
  AnimalsProvider,
};

export default AnimalsContext;
