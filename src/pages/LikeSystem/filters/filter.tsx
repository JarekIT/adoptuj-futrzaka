import isPointWithinRadius from "geolib/es/getDistance";

import { AnimalDAO } from "../../../interfaces/Animal";
import { ShelterDAO } from "../../../interfaces/Shelter";
import { UserDAO } from "../../../interfaces/User";

export const haveIGotAnimalToWatch = (
  animals: AnimalDAO[],
  user: UserDAO
): boolean => {
  const haveNotIGotEmptyAnimals: () => AnimalDAO = () => {
    console.log(`Animals left ${animals.length} --->`);
    console.log(animals);
    console.log("Next Animal --->");
    console.log(animals[0]);
    return animals[0];
  };

  const haveIGotEmptyViewedList = () => {
    const haveNotISeenThatAnimal: () => boolean = () => {
      return !user.viewedAnimals.includes(animals[0].id) ? true : false;
    };

    return user.viewedAnimals.length > 0 ? true : haveNotISeenThatAnimal();
  };

  return haveNotIGotEmptyAnimals() && haveIGotEmptyViewedList();
};

export function getFilteredAnimal(
  animals: AnimalDAO[],
  user: UserDAO
): false | AnimalDAO {
  if (!haveIGotAnimalToWatch(animals, user)) {
    return false;
  }

  let i: number = 0;
  const haveNotISeenThatAnimal: (i: number) => boolean = (i: number) => {
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

type MapSheltersType = Record<number, ShelterDAO>;

interface FilterAllAnimalsProps {
  allAnimals: AnimalDAO[];
  user: UserDAO;
  setAnimals: React.Dispatch<React.SetStateAction<AnimalDAO[]>>;
  shelters: ShelterDAO[];
}

interface ILatLng {
  latitude: number;
  longitude: number;
}

export const filterAllAnimals = ({
  allAnimals,
  user,
  setAnimals,
  shelters,
}: FilterAllAnimalsProps): void => {
  console.log("Filtruje nowe ustawienia ;)");
  let newAnimals: AnimalDAO[] = [];

  let mapShelters: MapSheltersType = {};
  shelters.forEach((shelter: ShelterDAO) => {
    mapShelters[shelter.id] = shelter;
  });
  console.log(mapShelters);

  console.log("....... wszystkie zwierzeta do przefiltrowania");
  console.log(allAnimals);
  allAnimals.forEach((animal: AnimalDAO) => {
    function filterDistance(): boolean {
      if (user.location.lat === null) return true;

      const point: ILatLng = {
        latitude: mapShelters[animal.shelterId].lat,
        longitude: mapShelters[animal.shelterId].lng,
      };
      const centerPoint: ILatLng = {
        latitude: user.location.lat,
        longitude: user.location.lng,
      };
      const distanceToShelter: number = isPointWithinRadius(
        point,
        centerPoint,
        1000
      );
      console.log(distanceToShelter);
      return distanceToShelter <= user.filters.mapRange;
    }

    function filterType(): boolean {
      return (user.filters.viewCats && animal.type === "cat") ||
        (user.filters.viewDogs && animal.type === "dog")
        ? true
        : false;
    }

    function filterGender(): boolean {
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
