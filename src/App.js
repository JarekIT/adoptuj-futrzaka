import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import "./App.css";
import Map from "./components/map/Map";
import AddShelter from "./components/addshelter/AddShelter.jsx";
import Shelters from "./components/shelters/Shelters.jsx";
import mockData from "./components/map/database";
import LikeSystem from "./components/likesystem/LikeSystem.jsx";
import databaseAnimals from "./components/likesystem/databaseAnimals.json";
import databaseUsers from "./components/likesystem/databaseUsers.json";
import ShowLikedAnimals from "./components/likesystem/ShowLikedAnimals.jsx";
import BurgerMenu from "./components/burgermenu/BurgerMenu";

function App() {
  const [shelters, setShelters] = useState([]);
  const [users, setUsers] = useState(databaseUsers);
  const [animals, setAnimals] = useState(databaseAnimals);
  const [user, setUser] = useState(databaseUsers[0]);

  useEffect(() => {
    setShelters(mockData);
    setAnimals(databaseAnimals);
    setUsers(databaseUsers);
    setUser(databaseUsers[0]);
  }, []);

  useEffect(() => {}, [shelters]);

  return (
    <React.StrictMode>
      <div id="created-by-react">
        <BurgerMenu />

        <Router>
          <LikeSystem
            path="/start"
            user={user}
            animals={animals}
            setAnimals={setAnimals}
          />
          <ShowLikedAnimals path="/end" user={user} animals={animals} />
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
