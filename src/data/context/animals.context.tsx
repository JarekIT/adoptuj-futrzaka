import React, { createContext, useState } from "react";

import databaseAnimals from "../mocks/databaseAnimals.json";

import { AnimalDAO } from "../../interfaces/Animal";

interface IAnimalsContext {
  animals: AnimalDAO[];
  setAnimals: React.Dispatch<React.SetStateAction<AnimalDAO[]>>;
  allAnimals: AnimalDAO[];
  setAllAnimals: React.Dispatch<React.SetStateAction<AnimalDAO[]>>;
}

const store = createContext({} as IAnimalsContext);

const { Provider } = store;

function AnimalsProvider({ children }: { children: JSX.Element }) {
  const [allAnimals, setAllAnimals] = useState<AnimalDAO[]>(databaseAnimals);
  const [animals, setAnimals] = useState<AnimalDAO[]>(databaseAnimals);

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
