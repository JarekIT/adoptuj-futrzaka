import React, { createContext, useState } from "react";

import databaseUsers from "../mocks/databaseUsers.json";

import { UserDAO } from "../../interfaces/User";

interface IUserContext {
  user: UserDAO;
  setUser: React.Dispatch<React.SetStateAction<UserDAO>>;
}

const store = createContext({} as IUserContext);

const { Provider } = store;

function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<UserDAO>(databaseUsers[0]);

  return (
    <Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Provider>
  );
}

const UserContext = {
  store,
  UserProvider,
};

export default UserContext;
