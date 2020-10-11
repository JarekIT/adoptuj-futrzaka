import React, { Fragment, useContext } from "react";

import EnterAddressInput from "./EnterAddressInput/EnterAddressInput";

import { Store } from "../../data/store/Store";

import { UserDAO } from "../../interfaces/User";

const FilterOptions: React.FC = () => {
  const { state, dispatch } = useContext(Store);
  const { user } = state;

  const switchOption = (opt: string) => {
    const newFilterOptionsInUser: UserDAO = { ...user };

    switch (opt) {
      case "CATS":
        newFilterOptionsInUser.filters.viewCats = !newFilterOptionsInUser
          .filters.viewCats;
        break;
      case "MALES":
        newFilterOptionsInUser.filters.viewMales = !newFilterOptionsInUser
          .filters.viewMales;
        break;
      case "FEMALES":
        newFilterOptionsInUser.filters.viewFemales = !newFilterOptionsInUser
          .filters.viewFemales;
        break;
      default:
        break;
    }

    dispatch({
      type: "MODIFY_USER",
      payload: newFilterOptionsInUser,
    });

    console.log("Nowe options");
    console.log(user.filters);
  };

  const switchRange = (newRange: number) => {
    const newRangeInUser: UserDAO = { ...user };
    newRangeInUser.filters.mapRange = newRange;
    dispatch({
      type: "MODIFY_USER",
      payload: newRangeInUser,
    });
    console.log(`Nowy zasieg -> ${user.filters.mapRange / 1000}`);
  };

  return (
    <div>
      {user.location.city === null ? (
        <h3>Wpisz swój adres</h3>
      ) : (
        <Fragment>
          <h3>Będziemy szukać w okolicy:</h3>
          <h3>{user.location.city}</h3>
        </Fragment>
      )}
      <EnterAddressInput />

      <hr />

      <button onClick={() => switchOption("CATS")}>Pokaz Koty</button>
      <span> =&gt; {user.filters.viewCats ? "tak" : "nie"}</span>
      <br />
      <button onClick={() => switchOption("MALES")}>Pokaz Samce</button>
      <span> =&gt; {user.filters.viewMales ? "tak" : "nie"}</span>
      <br />
      <button onClick={() => switchOption("FEMALES")}>Pokaz Samice</button>
      <span> =&gt; {user.filters.viewFemales ? "tak" : "nie"}</span>
      <br />
      <br />
      <span>zasieg =&gt; {user.filters.mapRange / 1000} km</span>
      <br />
      <button onClick={() => switchRange(10000)}>10 km</button>
      <button onClick={() => switchRange(25000)}>25 km</button>
      <button onClick={() => switchRange(50000)}>50 km</button>
      <button onClick={() => switchRange(100000)}>100 km</button>
    </div>
  );
};

export default React.memo(FilterOptions);
