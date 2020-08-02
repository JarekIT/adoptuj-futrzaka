import firebase from "./firebase";

const database = firebase.database();

const anonymousLogin = ({ setUser }) => {
  const newUser = {
    id: null,
    name: "anonimie",
    email: null,
    picture: null,
    likedAnimals: [],
    lovedAnimals: [],
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
  if (loggedUser.lovedAnimals === undefined) loggedUser.lovedAnimals = [];
  if (loggedUser.nextAnimals === undefined) loggedUser.nextAnimals = [];
  if (loggedUser.viewedAnimals === undefined) loggedUser.viewedAnimals = [];
  setUser(loggedUser);
};

const createNewUser = async ({ response, setUser }) => {
  const newUser = {
    id: response.userID,
    name: response.name,
    email: response.email,
    picture: response.picture.data.url,
    likedAnimals: [],
    lovedAnimals: [],
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

const loadUser = async ({ response, setUser }) => {
  await database
    .ref(`users/${response.userID}`)
    .once("value")
    .then(function (snapshot) {
      var loggedUser = snapshot.val() ? snapshot.val().user : "New User";
      loggedUser === "New User"
        ? createNewUser({ response, setUser })
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
