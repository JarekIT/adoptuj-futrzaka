import React, { createContext, useState } from "react";

import databaseUsers from "../../components/likesystem/databaseUsers.json";

const initialValue = {};

const store = createContext(initialValue);

const { Provider } = store;

function UserProvider({ children }) {
  const [user, setUser] = useState(databaseUsers[0]);

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
