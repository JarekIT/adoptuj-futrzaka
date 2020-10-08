import firebase from "./firebase";

import { UserDAO } from "../../interfaces/User";

type setUserType = React.Dispatch<React.SetStateAction<UserDAO>>;

const database: firebase.database.Database = firebase.database();

const newNewUser = (
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

export const anonymousLogin = (setUser: setUserType): void => {
  const newUser: UserDAO = newNewUser(null, "anonimie", null, null);
  setUser(newUser);
};

export const updateUser = async (newUser: UserDAO): Promise<void> => {
  await database.ref(`users/${newUser.id}`).set({
    user: newUser,
  });
};

export const prepareExistingUser = (
  loggedUser: UserDAO,
  setUser: setUserType
): void => {
  if (loggedUser.likedAnimals === undefined) loggedUser.likedAnimals = [];
  if (loggedUser.nextAnimals === undefined) loggedUser.nextAnimals = [];
  if (loggedUser.viewedAnimals === undefined) loggedUser.viewedAnimals = [];
  if (loggedUser.location === undefined) {
    loggedUser.location = {
      lat: 54.5188898,
      lng: 18.5305409,
      city: null,
      address: null,
    };
  }
  if (loggedUser.filters === undefined) {
    loggedUser.filters = {
      viewCats: true,
      viewDogs: true,
      viewMales: true,
      viewFemales: true,
      mapRange: 100000,
    };
  }
  setUser(loggedUser);
};

export const createNewUser = async (
  fireUser: firebase.User,
  setUser: setUserType
): Promise<void> => {
  const newUser: UserDAO = newNewUser(
    fireUser.uid,
    fireUser.displayName,
    fireUser.email,
    fireUser.photoURL
  );
  setUser(newUser);

  await database.ref(`users/${newUser.id}`).set({
    user: newUser,
  });
};

export const loadUser = async (
  fireUser: firebase.User,
  setUser: setUserType
): Promise<void> => {
  await database
    .ref(`users/${fireUser.uid}`)
    .once("value")
    .then(function (snapshot: firebase.database.DataSnapshot) {
      var loggedUser = snapshot.val() ? snapshot.val().user : "New User";
      loggedUser === "New User"
        ? createNewUser(fireUser, setUser)
        : prepareExistingUser(loggedUser, setUser);
    });
};
