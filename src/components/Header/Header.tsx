import React, { useContext } from "react";
import { Link } from "@reach/router";

import "./header.css";

import BurgerMenu from "../burgermenu/BurgerMenu";

import { Store } from "../../data/store/Store";

const Header = () => {
  const { state } = useContext(Store);
  const { user } = state;

  return (
    <header>
      <div className="fl">
        <Link to="/find">
          <button type="button">
            <img src="/images/misc/find.png" alt="Logo" />
          </button>
        </Link>
      </div>

      <div className="fl">
        <Link to="/found">
          <button type="button">
            <img src="/images/misc/showLiked.png" alt="Show Liked" />
          </button>
        </Link>
      </div>

      <div className="fl">
        <Link to="/map">
          <button type="button">
            <img src="/images/misc/shelter.png" alt="Logo" />
          </button>
        </Link>
      </div>

      <div className="fl">
        <Link to="/">
          <button type="button">
            {user.picture ? (
              <img src={user.picture} alt="Zdjecie" />
            ) : (
              <img src="/images/misc/user.png" alt="Login" />
            )}
          </button>
        </Link>
      </div>

      <div className="fl">
        <BurgerMenu />
      </div>
    </header>
  );
};

export default React.memo(Header);
