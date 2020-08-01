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
import FilterOptions from "./components/options/FilterOptions";
import ShowAnimalDetails from "./components/likesystem/ShowAnimalDetails";
import GeneratedRandomAnimal from "./components/addanimal/GeneratedRandomAnimal";
import AddAnimal from "./components/addanimal/AddAnimal";

function App() {
  const [shelters, setShelters] = useState([]);
  const [users, setUsers] = useState(databaseUsers);
  const [animals, setAnimals] = useState(databaseAnimals);
  const [user, setUser] = useState(users[0]);
  const [filterOptions, setFilterOptions] = useState({
    viewCats: true,
    viewDogs: true,
    viewMales: true,
    viewFemales: true,
    mapRange: 100000,
  });

  useEffect(() => {
    setShelters(mockData);
    setAnimals(databaseAnimals);
    setUsers(databaseUsers);
    setUser(users[0]);
  }, []);

  useEffect(() => {}, [shelters]);

  return (
    <React.StrictMode>
      <BurgerMenu />
      <div className="app">
        <Header />

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
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
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
          <FilterOptions
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
            path="/options"
          />
          <ShowAnimalDetails
            path="/details/:animalId"
            shelters={shelters}
            animals={animals}
            user={user}
          />
          <GeneratedRandomAnimal path="/generateanimal" />
          <AddAnimal path="/addanimal" />
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
