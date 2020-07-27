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
