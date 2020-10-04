import React, { useContext } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import "./map.css";
import Shelters from "../Shelters/Shelters";

import SheltersContext from "data/context/shelters.context";
import UserContext from "data/context/user.context";

require("dotenv").config();

function Map() {
  const { shelters } = useContext(SheltersContext.store);
  const { user } = useContext(UserContext.store);

  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100vw",
    maxWidth: "1000px",
    height: "50vh",
    margin: "auto",
  };
  const center = {
    lat: user.location.lat,
    lng: user.location.lng,
  };
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [selected, setSelected] = React.useState(null);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  });

  const onMapClickShowLatLng = React.useCallback((event) => {
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();
    console.log(`lat: ${lat}, lng: ${lng}`);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <div className="searchbar">
        <Search panTo={panTo} />
        <Locate panTo={panTo} />
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onLoad={onMapLoad}
        onClick={onMapClickShowLatLng}
      >
        {shelters.map((marker) => (
          <Marker
            key={marker.name}
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
      <hr />
      <Shelters shelters={shelters} />
    </div>
  );
}

export default React.memo(Map);

function Locate({ panTo }) {
  return (
    <div className="bar">
      <button
        className="locate"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <img src="/compas.svg" alt="compass - locate me" />
      </button>
    </div>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 54.51889, lng: () => 18.53054 },
      radius: 200 * 1000,
    },
  });
  return (
    <div className="bar">
      <div className="search">
        <Combobox
          onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions();

            try {
              const results = await getGeocode({ address });
              console.log(results);
              const { lat, lng } = await getLatLng(results[0]);
              console.log(lat, lng);
              panTo({ lat, lng });
            } catch {
              console.log("error");
            }
            console.log(address);
          }}
        >
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Znajdź schronisko"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    </div>
  );
}
