import React from "react";
import { Link } from "@reach/router";
import "./App.css";

const Header = () => {
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
        <Link to="/options">
          <button type="button">
            <img src="/images/misc/options.png" alt="Options" />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
