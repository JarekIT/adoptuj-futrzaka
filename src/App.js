import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Header from "./Header";

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

function App() {
  const [shelters, setShelters] = useState([]);
  const [users, setUsers] = useState(databaseUsers);
  const [animals, setAnimals] = useState(databaseAnimals);
  const [user, setUser] = useState(users[0]);

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

        <Router>
          <Main path="/" />
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
          <Map path="/map" shelters={shelters} />
          <AddShelter
            path="/add"
            shelters={shelters}
            setShelters={setShelters}
          />
          <Shelters shelters={shelters} path="/list" />
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
