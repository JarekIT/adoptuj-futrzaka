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

  if (animals.length === 0) {
    return false;
  }

  return animals[0];
}

export const filterAllAnimals = ({ allAnimals, filterOptions, setAnimals }) => {
  console.log("Filtruje nowe ustawienia ;)");
  let newAnimals = [];

  console.log(allAnimals);
  allAnimals.map((animal) => {
    function filterType() {
      return (filterOptions.viewCats && animal.type === "cat") ||
        (filterOptions.viewDogs && animal.type === "dog")
        ? true
        : false;
    }

    function filterGender() {
      return (filterOptions.viewFemales && animal.gender === "samica") ||
        (filterOptions.viewMales && animal.gender === "samiec")
        ? true
        : false;
    }

    if (filterType() && filterGender()) {
      newAnimals.push(animal);
    }
  });

  setAnimals(newAnimals);
  console.log(newAnimals);
};
