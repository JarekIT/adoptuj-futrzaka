import { Dispatch } from "../../interfaces/Store";
import { UserDAO } from "../../interfaces/User";

export const newNewUser = (
  id: string | null,
  name: string | null,
  email: string | null,
  picture: string | null
): UserDAO => {
  return {
    id: id,
    name: name,
    email: email,
    picture: picture,
    likedAnimals: [],
    nextAnimals: [],
    viewedAnimals: [],
    location: {
      lat: 54.5188898,
      lng: 18.5305409,
      city: null,
      address: null,
    },
    filters: {
      viewCats: true,
      viewDogs: true,
      viewMales: true,
      viewFemales: true,
      mapRange: 100000,
    },
  };
};

export const anonymousLogin = (dispatch: Dispatch): void => {
  const newUser: UserDAO = newNewUser(null, "anonimie", null, null);

  dispatch({
    type: "MODIFY_USER",
    payload: newUser,
  });
};
