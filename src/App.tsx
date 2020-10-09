import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import Header from "./Header";

import "./App.css";

import BurgerMenu from "./components/burgermenu/BurgerMenu";
import FilterAnimals from "./components/options/FilterAnimals";

import Main from "./pages/Main/Main";
import Map from "./pages/Map/Map";
import Shelters from "./pages/Shelters/Shelters";
import LikeSystem from "./pages/LikeSystem/LikeSystem";
import ShowLikedAnimals from "./pages/ShowLikedAnimals/ShowLikedAnimals";
import ShowAnimalDetails from "./pages/ShowAnimalDetails/ShowAnimalDetails";

import AddShelter from "./pages/AddShelter/AddShelter";
import AddAnimal from "./pages/AddAnimal/AddAnimal";
import GeneratedRandomAnimal from "./pages/AddAnimal/GeneratedRandomAnimal/GeneratedRandomAnimal";

import { StoreProvider } from "./data/store/Store";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

function App(): JSX.Element {
  return (
    <React.StrictMode>
      <StoreProvider>
        <React.Fragment>
          <BurgerMenu />
          <div className="app">
            <Header />

            <Router>
              <RouterPage pageComponent={<Main />} path="/" />
              <RouterPage pageComponent={<LikeSystem />} path="/find" />
              <RouterPage pageComponent={<ShowLikedAnimals />} path="/found" />
              <RouterPage pageComponent={<Map />} path="/map" />
              <RouterPage pageComponent={<Shelters />} path="/list" />
              <RouterPage pageComponent={<FilterAnimals />} path="/options" />
              {/* <RouterPage
                pageComponent={<ShowAnimalDetails />}
                path="/details/:animalId"
              /> */}
              <ShowAnimalDetails path="/details/:animalId" />

              {/* for admin */}
              <RouterPage pageComponent={<AddShelter />} path="/add" />
              <RouterPage pageComponent={<AddAnimal />} path="/addanimal" />
              <RouterPage
                pageComponent={<GeneratedRandomAnimal />}
                path="/generateanimal"
              />
            </Router>
          </div>
        </React.Fragment>
      </StoreProvider>
    </React.StrictMode>
  );
}

export default React.memo(App);
