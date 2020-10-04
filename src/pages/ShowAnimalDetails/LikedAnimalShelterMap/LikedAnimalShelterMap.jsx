import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";

require("dotenv").config();

const LikedAnimalShelterMap = ({ shelter }) => {
  const [selected, setSelected] = useState(null);

  const center = {
    lat: Number(shelter.lat),
    lng: Number(shelter.lng),
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
        <Marker
          key={shelter.id}
          position={{ lat: Number(shelter.lat), lng: Number(shelter.lng) }}
          onClick={() => setSelected(shelter)}
        />
        )
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

export default React.memo(LikedAnimalShelterMap);
