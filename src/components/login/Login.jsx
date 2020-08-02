import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { loadUser, anonymousLogin } from "../database/FirebaseOperationsUser";

const Login = ({ user, setUser }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const componentClicked = () => {};

  const anonymous = () => {
    anonymousLogin(setUser);
    setLoggedIn(false);
  };

  const responseFacebook = async (response) => {
    console.log(response);
    await loadUser({ response, setUser });
    setLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
          }}
        >
          <img src={user.picture} alt={user.name} />
          <h4>Witaj {user.name}</h4>
        </div>
      ) : (
        <FacebookLogin
          appId="292857611960409"
          autoLoad={false}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      )}
      <br />
      {<button onClick={anonymous}>Wejdź anonimowo</button>}
    </div>
  );
};

export default Login;
