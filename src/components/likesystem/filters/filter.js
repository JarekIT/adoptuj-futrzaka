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

export function getFilteredAnimal(animals, user) {
  if (!haveIGotAnimalToWatch(animals, user)) {
    return false;
  }

  let i = 0;
  const haveNotISeenThatAnimal = (i) => {
    return user.viewedAnimals.includes(animals[i].id) ? true : false;
  };

  while (i < animals.length && haveNotISeenThatAnimal(i)) {
    console.log("Looking for new animal");
    console.log(i + ": " + haveNotISeenThatAnimal(i));
    i++;
  }

  if (animals.length === 0) {
    return false;
  }

  return animals[i];
}

export const filterAllAnimals = ({ allAnimals, user, setAnimals }) => {
  console.log("Filtruje nowe ustawienia ;)");
  let newAnimals = [];

  console.log(allAnimals);
  allAnimals.map((animal) => {
    function filterType() {
      return (user.filters.viewCats && animal.type === "cat") ||
        (user.filters.viewDogs && animal.type === "dog")
        ? true
        : false;
    }

    function filterGender() {
      return (user.filters.viewFemales && animal.gender === "samica") ||
        (user.filters.viewMales && animal.gender === "samiec")
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
