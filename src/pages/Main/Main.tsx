import React, { Fragment, useContext } from "react";
import { Link, Redirect } from "@reach/router";
import Login from "../../components/login/Login";

import { Store } from "../../data/store/Store";

const Main: React.FC = () => {
  const { state } = useContext(Store);
  const { user } = state;

  console.log(state);

  return (
    <div className="app">
      {user.name === null ? (
        <Fragment>
          <h3>Zaloguj się</h3>
          <Login />
        </Fragment>
      ) : (
        <Fragment>
          <h2>Witaj {user.name}</h2>
          <Redirect to="/find" />
        </Fragment>
      )}

      <h3>zacznij szukać</h3>
      <Link to="/find">
        <img src="/images/misc/find.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default React.memo(Main);
