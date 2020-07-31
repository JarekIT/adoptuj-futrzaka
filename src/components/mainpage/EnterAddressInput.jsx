import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "@reach/combobox/styles.css";

export default function EnterAddressInput({ user, setUser }) {
  const [address, setAddress] = React.useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);

    const newUserDetails = { ...user };
    newUserDetails.location.lat = latLng.lat;
    newUserDetails.location.lng = latLng.lng;
    newUserDetails.location.city = results[0].formatted_address;
    newUserDetails.location.address = results[0].address_components;
    setUser(newUserDetails);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "Wpisz adres" })} />

            <div>
              {loading ? <div>...wczytywanie</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
