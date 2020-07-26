import React from "react";

const Header = () => {
  return (
    <header>
      <div className="fl">
        <button type="button">
          <img src="/images/misc/showLiked.png" alt="Show Liked" />
        </button>
      </div>

      <div className="fl">
        <button type="button">
          <img src="/images/misc/logo.png" alt="Logo" />
        </button>
      </div>

      <div className="fl">
        <button type="button">
          <img src="/images/misc/options.png" alt="Options" />
        </button>
      </div>
    </header>
  );
};

export default Header;
