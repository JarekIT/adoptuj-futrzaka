import React, { useEffect, useState, useContext } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";

import SheltersContext from "data/context/shelters.context";
import UserContext from "data/context/user.context";

require("dotenv").config();

const LikedAnimalsShelterMap = () => {
  const { shelters } = useContext(SheltersContext.store);
  const { user } = useContext(UserContext.store);

  const [sheltersLatLng, setSheltersLatLng] = useState([]);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getLatLngFilteredShelters();
  }, []);

  useEffect(() => {
    calculateCenterLatLng();
  }, [sheltersLatLng]);

  const getLatLngFilteredShelters = () => {
    const nonRepeatSheltersId = [];
    const newSheltersLatLng = [...sheltersLatLng];

    user.likedAnimals.map((animal) => {
      if (!nonRepeatSheltersId.includes(animal.shelterId)) {
        nonRepeatSheltersId.push(animal.shelterId);
      }
      return null;
    });

    console.log(shelters);
    shelters.map((shelter) => {
      if (nonRepeatSheltersId.includes(shelter.id)) {
        const newMarker = {
          name: shelter.name,
          lat: shelter.lat,
          lng: shelter.lng,
          tel: shelter.tel,
        };
        newSheltersLatLng.push(newMarker);
      }
      return null;
    });
    setSheltersLatLng(newSheltersLatLng);
  };

  const calculateCenterLatLng = () => {
    let sumLat = 0;
    let sumLng = 0;

    sheltersLatLng.map((shelter) => {
      sumLat = Number(sumLat) + Number(shelter.lat);
      sumLng = Number(sumLng) + Number(shelter.lng);
      return null;
    });

    let newLat = Number(sumLat) / sheltersLatLng.length;
    let newLng = Number(sumLng) / sheltersLatLng.length;

    let newCenter = {
      lat: newLat,
      lng: newLng,
    };

    console.log("New Center");
    console.log(newCenter);
    setCenter(newCenter);
  };

  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100vw",
    maxWidth: "1000px",
    height: "50vh",
    margin: "auto",
  };
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <hr />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {sheltersLatLng.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
            onClick={() => {
              setSelected(marker);
              console.log(marker);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: Number(selected.lat), lng: Number(selected.lng) }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>Schronisko:</h2>
              <p>{selected.name}</p>
              <p>tel: {selected.tel}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default LikedAnimalsShelterMap;
