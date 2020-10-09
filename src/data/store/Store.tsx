import React from "react";

import { IState, IAction, IStore } from "../../interfaces/Store";

import databaseAnimals from "../mocks/databaseAnimals.json";
import mockData from "../mocks/databaseShelters";
import databaseUsers from "../mocks/databaseUsers.json";

export const initialState: IState = {
  allAnimals: databaseAnimals,
  animals: databaseAnimals,
  shelters: mockData,
  user: databaseUsers[0],
};

export const Store = React.createContext<IStore>({} as IStore);

console.log(Store);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA_ANIMALS":
      return {
        ...state,
        allAnimals: action.payload,
        animals: action.payload,
      };
    case "FETCH_DATA_SHELTERS":
      return {
        ...state,
        shelters: action.payload,
      };
    case "FETCH_DATA_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "MODIFY_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "MODIFY_ANIMALS":
      return {
        ...state,
        animals: action.payload,
      };

    default:
      return state;
  }
}

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
