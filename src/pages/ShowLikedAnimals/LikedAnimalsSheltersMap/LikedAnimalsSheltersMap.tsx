import React, { useEffect, useState, useContext, Fragment } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";

import SheltersContext from "../../../data/context/shelters.context";
import UserContext from "../../../data/context/user.context";

import { ShelterDAO } from "../../../interfaces/Shelter";
import { AnimalDAO } from "../../../interfaces/Animal";

require("dotenv").config();

interface ILatLng {
  lat: number;
  lng: number;
}

interface IMarker extends ILatLng {
  id: number;
  name: string;
  tel: string;
}

const LikedAnimalsShelterMap: React.FC = () => {
  const { shelters } = useContext(SheltersContext.store);
  const { user } = useContext(UserContext.store);

  const [sheltersLatLng, setSheltersLatLng] = useState<IMarker[]>([]);
  const [center, setCenter] = useState<ILatLng>({
    lat: 54.5188898,
    lng: 18.5305409,
  });
  const [selected, setSelected] = useState<IMarker | null>(null);

  useEffect(() => {
    getLatLngFilteredShelters();
  }, []);

  useEffect(() => {
    calculateCenterLatLng();
  }, [sheltersLatLng]);

  const getLatLngFilteredShelters: () => void = () => {
    const nonRepeatSheltersId: number[] = [];
    const newSheltersLatLng: IMarker[] = [...sheltersLatLng];

    user.likedAnimals.forEach((animal: AnimalDAO) => {
      if (!nonRepeatSheltersId.includes(animal.shelterId)) {
        nonRepeatSheltersId.push(animal.shelterId);
      }
    });

    console.log(shelters);
    shelters.forEach((shelter: ShelterDAO) => {
      if (nonRepeatSheltersId.includes(shelter.id)) {
        const newMarker: IMarker = {
          id: shelter.id,
          name: shelter.name,
          lat: shelter.lat,
          lng: shelter.lng,
          tel: shelter.tel,
        };
        newSheltersLatLng.push(newMarker);
      }
    });
    setSheltersLatLng(newSheltersLatLng);
  };

  const calculateCenterLatLng: () => void = () => {
    let sumLat: number = 0;
    let sumLng: number = 0;

    sheltersLatLng.forEach((shelter: ILatLng) => {
      sumLat = Number(sumLat) + Number(shelter.lat);
      sumLng = Number(sumLng) + Number(shelter.lng);
    });

    let newLat: number = Number(sumLat) / sheltersLatLng.length;
    let newLng: number = Number(sumLng) / sheltersLatLng.length;

    let newCenter: ILatLng = {
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

  if (loadError) return <Fragment>"Error loading maps"</Fragment>;
  if (!isLoaded) return <Fragment>"Loading Maps"</Fragment>;

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
        {sheltersLatLng.map((marker: IMarker) => (
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

export default React.memo(LikedAnimalsShelterMap);
