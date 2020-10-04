import React, { useState, useContext } from "react";
import { loadUser, anonymousLogin } from "../database/FirebaseOperationsUser";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../database/firebase";

import UserContext from "../../data/context/user.context";

const Login = () => {
  const { setUser } = useContext(UserContext.store);

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
        loadUser(firebase.auth().currentUser, setUser);
      },
    },
  };

  useState(() => {
    firebase.auth().onAuthStateChanged((userrr) => {
      setLoggedIn(!!userrr);
      if (firebase.auth().currentUser) {
        loadUser(firebase.auth().currentUser, setUser);
      }
    });
  }, []);

  const anonymous = () => {
    anonymousLogin(setUser);
    setLoggedIn(false);
  };

  const logoutFromFirebase = () => {
    firebase.auth().signOut();
    anonymousLogin(setUser);
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
