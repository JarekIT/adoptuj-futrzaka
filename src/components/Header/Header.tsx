import React, { useContext } from "react";
import { Link } from "@reach/router";

import { HeaderStyle, Button, Img, Badge } from "./Header.css";

import BurgerMenu from "../burgermenu/BurgerMenu";

import { Store } from "../../data/store/Store";

const Header = () => {
  const { state } = useContext(Store);
  const { user } = state;

  const count: number = user.likedAnimals.length;

  return (
    <HeaderStyle>
      <Link to="/find">
        <Button>
          <Img src="/images/misc/find.png" alt="Logo" />
        </Button>
      </Link>

      <Link to="/found">
        <Button>
          <Img src="/images/misc/showLiked.png" alt="Show Liked" />
          <Badge>{count}</Badge>
        </Button>
      </Link>

      <Link to="/map">
        <Button>
          <Img src="/images/misc/shelter.png" alt="Logo" />
        </Button>
      </Link>

      <Link to="/">
        <Button>
          {user.picture ? (
            <Img src={user.picture} alt="Zdjecie" />
          ) : (
            <Img src="/images/misc/user.png" alt="Login" />
          )}
        </Button>
      </Link>

      <BurgerMenu />
    </HeaderStyle>
  );
};

export default React.memo(Header);
