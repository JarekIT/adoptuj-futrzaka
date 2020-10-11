import firebase from "./firebase";

import { newNewUser } from "../userOperations";

import { UserDAO } from "../../../interfaces/User";
import { Dispatch } from "../../../interfaces/Store";

const database: firebase.database.Database = firebase.database();

export const updateUser = async (newUser: UserDAO): Promise<void> => {
  await database.ref(`users/${newUser.id}`).set({
    user: newUser,
  });
};

/**
 * The database in Firebase cannot write an empty array or an empty object.
 * After fetching data (loadUser), you need to verify that the object does not contain missing elements.
 */
const prepareExistingUser = (loggedUser: UserDAO, dispatch: Dispatch): void => {
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
      mapRange: 1000000,
    };
  }

  dispatch({
    type: "MODIFY_USER",
    payload: loggedUser,
  });
};

export const createNewUser = async (
  fireUser: firebase.User,
  dispatch: Dispatch
): Promise<void> => {
  const newUser: UserDAO = newNewUser(
    fireUser.uid,
    fireUser.displayName,
    fireUser.email,
    fireUser.photoURL
  );

  dispatch({
    type: "MODIFY_USER",
    payload: newUser,
  });

  await database.ref(`users/${newUser.id}`).set({
    user: newUser,
  });
};

export const loadUser = async (
  fireUser: firebase.User,
  dispatch: Dispatch
): Promise<void> => {
  await database
    .ref(`users/${fireUser.uid}`)
    .once("value")
    .then(function (snapshot: firebase.database.DataSnapshot) {
      var loggedUser = snapshot.val() ? snapshot.val().user : "New User";
      loggedUser === "New User"
        ? createNewUser(fireUser, dispatch)
        : prepareExistingUser(loggedUser, dispatch);
    });
};
