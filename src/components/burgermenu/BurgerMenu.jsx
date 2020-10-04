import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "@reach/router";
import "./burger-menu.css";
import FilterAnimals from "../options/FilterAnimals";

const BurgerMenu = () => {
  return (
    <Menu>
      <FilterAnimals />

      <Link to="/">
        <h4>Strona glowna</h4>
      </Link>
      <Link to="/find">
        <h4>Pokaz zwierzaki</h4>
      </Link>
      <Link to="/found">
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
      <Link to="/addanimal">
        <h4>Dodaj zwierzaka</h4>
      </Link>
      <Link to="/generateanimal">
        <h4>Wygeneruj losowego zwierzaka</h4>
      </Link>
      <Link to="/login">
        <h4>Zaloguj sie</h4>
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
