import React from "react";
import EnterAddressInput from "./EnterAddressInput";
import { Link } from "@reach/router";
import Login from "../login/Login";
import FilterAnimals from "../options/FilterAnimals";

const Main = ({ user, setUser }) => {
  return (
    <div className="app">
      {user.name === null ? (
        <>
          <h3>Zaloguj się</h3>
          <Login user={user} setUser={setUser} />
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

      <EnterAddressInput
        user={user}
        setUser={setUser}
        text="Wpisz swój adres:"
      />

      <h3>ustaw filtry</h3>
      <FilterAnimals user={user} setUser={setUser} />

      <h3>zacznij szukać</h3>
      <Link to="/find">
        <img src="/images/misc/find.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default Main;
