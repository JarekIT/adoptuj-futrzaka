import React from "react";

const FilterOptions = ({ filterOptions, setFilterOptions }) => {
  const switchViewCats = () => {
    const newFilterOptions = filterOptions;
    newFilterOptions.viewCats = !filterOptions.viewCats;
    setFilterOptions(newFilterOptions);
  };

  const switchViewMales = () => {
    const newFilterOptions = filterOptions;
    newFilterOptions.viewMales = !filterOptions.viewMales;
    setFilterOptions(newFilterOptions);
  };

  const switchViewFemales = () => {
    const newFilterOptions = filterOptions;
    newFilterOptions.viewFemales = !filterOptions.viewFemales;
    setFilterOptions(newFilterOptions);
  };

  return (
    <div>
      <button
        onClick={() => switchViewCats()}
      >{`Koty = ${filterOptions.viewCats}`}</button>
      <br />
      <button
        onClick={() => switchViewMales()}
      >{`Samce = ${filterOptions.viewMales}`}</button>
      <br />
      <button
        onClick={() => switchViewFemales()}
      >{`Samice = ${filterOptions.viewFemales}`}</button>
    </div>
  );
};

export default FilterOptions;
