import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "@reach/router";
import "./burger-menu.css"

const BurgerMenu = () => {
  return (
    <Menu>
      <Link to="/">
        <h4>Strona glowna</h4>
      </Link>
      <Link to="/start">
        <h4>Pokaz zwierzaki</h4>
      </Link>
      <Link to="/end">
        <h4>Zerknij do pudełka</h4>
      </Link>
      <Link to="/map">
        <h4>Mapa schronisk</h4>
      </Link>
      <Link to="/list">
        <h4>Lista schronisk</h4>
      </Link>
      <Link to="/add">
        <h4>Dodaj schronisko</h4>
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
