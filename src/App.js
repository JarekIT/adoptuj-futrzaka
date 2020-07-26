import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/map/Map";
import AddShelter from "./components/addshelter/AddShelter.jsx";
import Shelters from "./components/shelters/Shelters.jsx";
import mockData from "./components/map/database";
import LikeSystem from "./components/likesystem/LikeSystem.jsx";
import databaseAnimals from "./components/likesystem/databaseAnimals.json";
import databaseUsers from "./components/likesystem/databaseUsers.json";
import ShowLikedAnimals from "./components/likesystem/ShowLikedAnimals.jsx";

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
    <React.Fragment>
      <div id="created-by-react">
        <Map shelters={shelters} />
        <hr />
        <LikeSystem user={user} animals={animals} setAnimals={setAnimals} />
        <hr />
        <ShowLikedAnimals user={user} animals={animals} />
        <hr />
        <AddShelter shelters={shelters} setShelters={setShelters} />
        <hr />
        <Shelters shelters={shelters} />
        <hr />
      </div>
    </React.Fragment>
  );
}

export default App;
