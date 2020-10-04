import React, { useContext } from "react";
import EnterAddressInput from "./EnterAddressInput/EnterAddressInput";
import { Link } from "@reach/router";
import Login from "../../components/login/Login";
import FilterAnimals from "../../components/options/FilterAnimals";

import UserContext from "../../data/context/user.context";

const Main = () => {
  const { user } = useContext(UserContext.store);

  return (
    <div className="app">
      {user.name === null ? (
        <>
          <h3>Zaloguj się</h3>
          <Login />
        </>
      ) : (
        <h2>Witaj {user.name}</h2>
      )}

      {user.location.city === null ? (
        <h3>Wpisz swój adres</h3>
      ) : (
        <>
          <h3>Będziemy szukać w okolicy:</h3>
          <h3>{user.location.city}</h3>
        </>
      )}

      <EnterAddressInput text="Wpisz swój adres:" />

      <h3>ustaw filtry</h3>
      <FilterAnimals />

      <h3>zacznij szukać</h3>
      <Link to="/find">
        <img src="/images/misc/find.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default React.memo(Main);
