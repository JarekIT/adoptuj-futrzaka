import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Header from "./Header";
// import FirebaseOperations from "./components/database/FirebaseOperations";

import "./App.css";
import Map from "./components/map/Map";
import AddShelter from "./components/addshelter/AddShelter.jsx";
import Shelters from "./components/shelters/Shelters.jsx";
import mockData from "./components/map/databaseShelters";
import LikeSystem from "./components/likesystem/LikeSystem.jsx";
import databaseAnimals from "./components/likesystem/databaseAnimals.json";
import databaseUsers from "./components/likesystem/databaseUsers.json";
import ShowLikedAnimals from "./components/likesystem/ShowLikedAnimals.jsx";
import BurgerMenu from "./components/burgermenu/BurgerMenu";
import Main from "./components/mainpage/Main";
import FilterAnimals from "./components/options/FilterAnimals";
import ShowAnimalDetails from "./components/likesystem/ShowAnimalDetails";
import GeneratedRandomAnimal from "./components/addanimal/GeneratedRandomAnimal";
import AddAnimal from "./components/addanimal/AddAnimal";
import Login from "./components/login/Login";
import { loadAllAnimals } from "./components/database/FirebaseOperationsAnimals";
import { filterAllAnimals } from "./components/likesystem/filters/filter";

function App() {
  const [shelters, setShelters] = useState(mockData);
  const [allAnimals, setAllAnimals] = useState(databaseAnimals);
  const [animals, setAnimals] = useState(databaseAnimals);
  const [user, setUser] = useState(databaseUsers[0]);

  useEffect(() => {
    loadAllAnimals({ setAllAnimals, setAnimals });
  }, []);

  useEffect(() => {
    console.log("nowe filtry !!!!");
    console.log(user);
    filterAllAnimals({ allAnimals, user, setAnimals });
  }, [user]);

  return (
    <React.StrictMode>
      <BurgerMenu />
      <div className="app">
        <Header user={user} />

        {/* <FirebaseOperations
          animals={animals}
          setAnimals={setAnimals}
          user={user}
          setUser={setUser}
        /> */}

        <Router>
          <Main path="/" user={user} setUser={setUser} />
          <LikeSystem
            path="/find"
            user={user}
            setUser={setUser}
            animals={animals}
            setAnimals={setAnimals}
            shelters={shelters}
          />
          <ShowLikedAnimals
            path="/found"
            user={user}
            animals={animals}
            shelters={shelters}
          />
          <Map path="/map" shelters={shelters} user={user} />
          <AddShelter
            path="/add"
            shelters={shelters}
            setShelters={setShelters}
          />
          <Shelters shelters={shelters} path="/list" />
          <FilterAnimals user={user} setUser={setUser} path="/options" />
          <ShowAnimalDetails
            path="/details/:animalId"
            shelters={shelters}
            animals={animals}
            user={user}
          />
          <GeneratedRandomAnimal path="/generateanimal" />
          <AddAnimal path="/addanimal" />
          <Login path="/login" user={user} setUser={setUser} />
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
