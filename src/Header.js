import React from "react";
import { Link } from "@reach/router";
import "./App.css";

const Header = ({ user }) => {
  return (
    <header>
      <div className="fl">
        <Link to="/">
          <button type="button">
            <img src="/images/misc/logo.png" alt="Logo" />
          </button>
        </Link>
      </div>

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
        <Link to="/login">
          <button type="button">
            {user.picture ? (
              <img src={user.picture} alt={user.name} />
            ) : (
              <img src="/images/misc/user.png" alt="Login" />
            )}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
