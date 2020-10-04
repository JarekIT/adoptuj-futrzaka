import React, { useState, useContext } from "react";
import { InputComponent } from "./InputComponent/InputComponent";

import SheltersContext from "../../data/context/shelters.context";

const AddShelter = () => {
  const { shelters, setShelters } = useContext(SheltersContext.store);

  const [name, setName] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [city, setCity] = useState("");
  const [tel, setTel] = useState("");

  const addShelter = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(shelters);

    const newShelter = {
      name: name,
      lat: lat,
      lng: lng,
      city: city,
      tel: tel,
    };

    const newShelters = [...shelters, newShelter];

    setShelters(newShelters);

    console.log(newShelters);
  };

  return (
    <div>
      <h4>
        Dodaj schronisko <br />
      </h4>
      <form>
        <InputComponent label="Nazwa" state={name} setState={setName} />
        <InputComponent
          label="Latitude"
          state={lat}
          setState={setLat}
          type="number"
        />
        <InputComponent
          label="Longitude"
          state={lng}
          setState={setLng}
          type="number"
        />
        <InputComponent label="Miasto" state={city} setState={setCity} />
        <InputComponent label="Telefon" state={tel} setState={setTel} />
      </form>
      <button onClick={(event) => addShelter(event)}>Dodaj schronisko</button>
    </div>
  );
};

export default React.memo(AddShelter);
