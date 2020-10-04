import isPointWithinRadius from "geolib/es/getDistance";

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

export const filterAllAnimals = ({
  allAnimals,
  user,
  setAnimals,
  shelters,
}) => {
  console.log("Filtruje nowe ustawienia ;)");
  let newAnimals = [];

  let mapShelters = {};
  shelters.forEach((shelter) => {
    mapShelters[shelter.id] = shelter;
  });
  console.log(mapShelters);

  console.log("....... wszystkie zwierzeta do przefiltrowania");
  console.log(allAnimals);
  allAnimals.map((animal) => {
    function filterDistance() {
      if (user.location.lat === null) return true;

      const point = {
        latitude: mapShelters[animal.shelterId].lat,
        longitude: mapShelters[animal.shelterId].lng,
      };
      const centerPoint = {
        latitude: user.location.lat,
        longitude: user.location.lng,
      };
      const distanceToShelter = isPointWithinRadius(point, centerPoint, 1000);
      console.log(distanceToShelter);
      return distanceToShelter <= user.filters.mapRange;
    }

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

    if (filterDistance() && filterType() && filterGender()) {
      newAnimals.push(animal);
    }
  });

  console.log("....... nowo przefiltrowane zwierzeta");
  setAnimals(newAnimals);
  console.log(newAnimals);
};
