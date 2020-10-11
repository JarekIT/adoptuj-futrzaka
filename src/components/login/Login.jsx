import React, { useState, useContext } from "react";
import {
  loadUser,
  anonymousLogin,
} from "../database/Firebase/FirebaseOperationsUser";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../database/Firebase/firebase";

import { Store } from "../../data/store/Store";

const Login = () => {
  const { dispatch } = useContext(Store);

  const [isLoggedIn, setLoggedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => {
        console.log("Zalogowano");
        console.log(firebase.auth().currentUser);
        loadUser(firebase.auth().currentUser, dispatch);
      },
    },
  };

  useState(() => {
    firebase.auth().onAuthStateChanged((userrr) => {
      setLoggedIn(!!userrr);
      if (firebase.auth().currentUser) {
        loadUser(firebase.auth().currentUser, dispatch);
      }
    });
  }, []);

  const anonymous = () => {
    anonymousLogin(dispatch);
    setLoggedIn(false);
  };

  const logoutFromFirebase = () => {
    firebase.auth().signOut();
    anonymousLogin(dispatch);
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <span>
          <h4>Witaj {firebase.auth().currentUser.displayName}</h4>
        </span>
      ) : (
        <>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <button onClick={anonymous}>Wejdź anonimowo</button>
        </>
      )}
      <br />
      {isLoggedIn ? (
        <button onClick={logoutFromFirebase}>Wyloguj się</button>
      ) : null}
    </div>
  );
};

export default React.memo(Login);
