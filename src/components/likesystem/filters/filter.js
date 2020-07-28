export const haveIGotAnimalToWatch = (animals, user) => {
  const haveNotIGotEmptyAnimals = () => {
    console.log(`Animals left ${animals.length} --->`);
    console.log(animals);
    console.log("Next Animal --->");
    console.log(animals[0]);
    return animals[0];
  };

  const haveIGotEmptyViewedList = () => {
    const haveNotISeenThatAnimal = () => {
      return !user.viewedAnimals.includes(animals[0].id) ? true : false;
    };

    return user.viewedAnimals.length > 0 ? true : haveNotISeenThatAnimal();
  };

  return haveNotIGotEmptyAnimals() && haveIGotEmptyViewedList();
};

export function getFilteredAnimal(animals, user, filterOptions) {
  if (!haveIGotAnimalToWatch(animals, user)) {
    return false;
  }

  let i = 0;

  function checkType() {
    return (
      (animals[i].type === "cat" && filterOptions.viewCats === true) ||
      (animals[i].type === "dog" && filterOptions.viewDogs === true)
    );
  }

  function checkGender() {
    return (
      (animals[i].gender === "samiec" && filterOptions.viewMales === true) ||
      (animals[i].gender === "samica" && filterOptions.viewFemales === true)
    );
  }

  while (i < animals.length && !(checkType() && checkGender())) {
    console.log("Looking for gender");
    console.log(i + ": " + checkGender());
    i++;
  }
  console.log("Found gender");
  console.log(i + ": true");

  if (i >= animals.length) {
    return false;
  }

  return animals[i];
}
