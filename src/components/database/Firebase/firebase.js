import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_API_KEY,
  authDomain: "pet-adoption-jarekit.firebaseapp.com",
  databaseURL: "https://pet-adoption-jarekit.firebaseio.com",
  projectId: "pet-adoption-jarekit",
  storageBucket: "pet-adoption-jarekit.appspot.com",
  messagingSenderId: "90908622517",
  appId: "1:90908622517:web:c4aa6984341ed74465c8fc",
  measurementId: "G-2NF16Q269H",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
