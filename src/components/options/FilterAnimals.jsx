import React, { useContext } from "react";

import UserContext from "../../data/context/user.context";

const FilterOptions = () => {
  const { user, setUser } = useContext(UserContext.store);

  const switchOption = (opt) => {
    const newFilterOptionsInUser = { ...user };

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

    setUser(newFilterOptionsInUser);

    console.log("Nowe options");
    console.log(user.filters);
  };

  const switchRange = (newRange) => {
    const newRangeInUser = { ...user };
    newRangeInUser.filters.mapRange = newRange;
    setUser(newRangeInUser);
    console.log(`Nowy zasieg -> ${user.filters.mapRange / 1000}`);
  };

  return (
    <div>
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
