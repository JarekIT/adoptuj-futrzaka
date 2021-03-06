import React, {
  useState,
  Fragment,
  useRef,
  useCallback,
  useEffect,
} from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";

import { ShelterDAO } from "../../../interfaces/Shelter";

require("dotenv").config();

interface ILatLng {
  lat: number;
  lng: number;
}
const LikedAnimalShelterMap: React.FC<{ shelter: ShelterDAO }> = ({
  shelter,
}) => {
  const [selected, setSelected] = useState<ShelterDAO | null>(null);

  useEffect(() => {
    shelter.lat ? setSelected(shelter) : setSelected(null);
  }, [shelter]);

  const center: ILatLng = {
    lat: Number(shelter.lat) ? Number(shelter.lat) : 54.5188898,
    lng: Number(shelter.lng) ? Number(shelter.lng) : 18.5305409,
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
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
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
