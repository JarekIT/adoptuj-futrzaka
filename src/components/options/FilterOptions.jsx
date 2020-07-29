import React from "react";

const FilterOptions = ({ filterOptions, setFilterOptions }) => {
  const switchOption = (opt) => {
    const newFilterOptions = {...filterOptions};

    switch (opt) {
      case "CATS":
        newFilterOptions.viewCats = !filterOptions.viewCats;
        break;
      case "MALES":
        newFilterOptions.viewMales = !filterOptions.viewMales;
        break;
      case "FEMALES":
        newFilterOptions.viewFemales = !filterOptions.viewFemales;
        break;
      default:
        break;
    }

    setFilterOptions(newFilterOptions);

    console.log("Nowe options");
    console.log(filterOptions);
  };

  return (
    <div>
      <br />
      <button onClick={() => switchOption("CATS")}>Pokaz Koty</button>
      <span> =&gt; {filterOptions.viewCats ? "tak" : "nie"}</span>
      <br />
      <button onClick={() => switchOption("MALES")}>Pokaz Samce</button>
      <span> =&gt; {filterOptions.viewMales ? "tak" : "nie"}</span>
      <br />
      <button onClick={() => switchOption("FEMALES")}>Pokaz Samice</button>
      <span> =&gt; {filterOptions.viewFemales ? "tak" : "nie"}</span>
      <br />
    </div>
  );
};

export default FilterOptions;
