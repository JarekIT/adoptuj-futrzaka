import React from "react";
import EnterAddressInput from "./EnterAddressInput";
import { Link } from "@reach/router";

const Main = ({ user, setUser }) => {
  return (
    <div className="app">
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

      <h3>zacznij szukać</h3>
      <Link to="/find">
        <button type="button">
          <img src="/images/misc/find.png" alt="Logo" />
        </button>
      </Link>

      <hr />
      <div>
        <img
          className="main-page-image"
          src="/images/misc/main.jpg"
          alt="Main Page Logo"
        />
      </div>
    </div>
  );
};

export default Main;
