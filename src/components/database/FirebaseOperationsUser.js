import firebase from "./firebase";

const database = firebase.database();

const anonymousLogin = (setUser) => {
  const newUser = {
    id: null,
    name: "anonimie",
    email: null,
    picture: null,
    likedAnimals: [],
    nextAnimals: [],
    viewedAnimals: [],
    location: {
      lat: null,
      lng: null,
      city: null,
      address: null,
    },
  };
  setUser(newUser);
};

const updateUser = async (newUser) => {
  await database.ref(`users/${newUser.id}`).set({
    user: newUser,
  });
};

const prepareExistingUser = ({ loggedUser, setUser }) => {
  if (loggedUser.likedAnimals === undefined) loggedUser.likedAnimals = [];
  if (loggedUser.nextAnimals === undefined) loggedUser.nextAnimals = [];
  if (loggedUser.viewedAnimals === undefined) loggedUser.viewedAnimals = [];
  if (loggedUser.location === undefined) {
    loggedUser.location = {
      lat: null,
      lng: null,
      city: null,
      address: null,
    };
  }
  setUser(loggedUser);
};

const createNewUser = async ({ fireUser, setUser }) => {
  const newUser = {
    id: fireUser.uid,
    name: fireUser.displayName,
    email: fireUser.email,
    picture: fireUser.photoURL,
    likedAnimals: [],
    nextAnimals: [],
    viewedAnimals: [],
    location: {
      lat: null,
      lng: null,
      city: null,
      address: null,
    },
  };
  setUser(newUser);

  await database.ref(`users/${newUser.id}`).set({
    user: newUser,
  });
};

const loadUser = async (fireUser, setUser) => {
  await database
    .ref(`users/${fireUser.uid}`)
    .once("value")
    .then(function (snapshot) {
      var loggedUser = snapshot.val() ? snapshot.val().user : "New User";
      loggedUser === "New User"
        ? createNewUser({ fireUser, setUser })
        : prepareExistingUser({ loggedUser, setUser });
    });
};

export {
  anonymousLogin,
  updateUser,
  prepareExistingUser,
  createNewUser,
  loadUser,
};
