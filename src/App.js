import React from "react";
import { Router } from "@reach/router";
import Header from "./Header";

import "./App.css";

import BurgerMenu from "./components/burgermenu/BurgerMenu";
import FilterAnimals from "./components/options/FilterAnimals";

import Main from "./pages/Main/Main";
import Map from "./pages/Map/Map";
import Shelters from "./pages/Shelters/Shelters.jsx";
import LikeSystem from "./pages/LikeSystem/LikeSystem.jsx";
import ShowLikedAnimals from "./pages/ShowLikedAnimals/ShowLikedAnimals.jsx";
import ShowAnimalDetails from "./pages/ShowAnimalDetails/ShowAnimalDetails";

import AddShelter from "./pages/AddShelter/AddShelter.jsx";
import AddAnimal from "./pages/AddAnimal/AddAnimal";
import GeneratedRandomAnimal from "./pages/AddAnimal/GeneratedRandomAnimal/GeneratedRandomAnimal";

import SheltersContext from "data/context/shelters.context";
import AnimalsContext from "data/context/animals.context";
import UserContext from "data/context/user.context";

function App() {
  return (
    <React.StrictMode>
      <SheltersContext.SheltersProvider>
        <AnimalsContext.AnimalsProvider>
          <UserContext.UserProvider>
            <BurgerMenu />
            <div className="app">
              <Header />

              <Router>
                <Main path="/" />
                <LikeSystem path="/find" />
                <ShowLikedAnimals path="/found" />
                <Map path="/map" />
                <Shelters path="/list" />
                <FilterAnimals path="/options" />
                <ShowAnimalDetails path="/details/:animalId" />

                {/* for admin */}
                <AddShelter path="/add" />
                <AddAnimal path="/addanimal" />
                <GeneratedRandomAnimal path="/generateanimal" />
              </Router>
            </div>
          </UserContext.UserProvider>
        </AnimalsContext.AnimalsProvider>
      </SheltersContext.SheltersProvider>
    </React.StrictMode>
  );
}

export default App;
