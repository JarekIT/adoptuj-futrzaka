import React from "react";

const FilterOptions = ({ user, setUser }) => {
  const switchOption = (opt) => {
    const newFilterOptionsInUser = { ...user };

    switch (opt) {
      case "CATS":
        newFilterOptionsInUser.viewCats = !user.filters.viewCats;
        break;
      case "MALES":
        newFilterOptionsInUser.viewMales = !user.filters.viewMales;
        break;
      case "FEMALES":
        newFilterOptionsInUser.viewFemales = !user.filters.viewFemales;
        break;
      default:
        break;
    }

    setUser(newFilterOptionsInUser);

    console.log("Nowe options");
    console.log(user.filters);
  };

  return (
    <div>
      <br />
      <button onClick={() => switchOption("CATS")}>Pokaz Koty</button>
      <span> =&gt; {user.filters.viewCats ? "tak" : "nie"}</span>
      <br />
      <button onClick={() => switchOption("MALES")}>Pokaz Samce</button>
      <span> =&gt; {user.filters.viewMales ? "tak" : "nie"}</span>
      <br />
      <button onClick={() => switchOption("FEMALES")}>Pokaz Samice</button>
      <span> =&gt; {user.filters.viewFemales ? "tak" : "nie"}</span>
      <br />
    </div>
  );
};

export default FilterOptions;
