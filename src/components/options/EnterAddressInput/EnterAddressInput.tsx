import React, { Fragment, useContext } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  Suggestion,
} from "react-places-autocomplete";
import "@reach/combobox/styles.css";

import { DbService } from "../../database/DbService";

import { Store } from "../../../data/store/Store";

import { UserDAO } from "../../../interfaces/User";

const EnterAddressInput: React.FC = () => {
  const { state, dispatch } = useContext(Store);
  const { user } = state;

  const [address, setAddress] = React.useState<string>("");

  const handleSelect: (value: string) => Promise<void> = async (
    value: string
  ) => {
    const results: google.maps.GeocoderResult[] = await geocodeByAddress(value);
    const latLng: google.maps.LatLngLiteral = await getLatLng(results[0]);
    setAddress(value);

    const newUserDetails: UserDAO = { ...user };
    newUserDetails.location.lat = latLng.lat;
    newUserDetails.location.lng = latLng.lng;
    newUserDetails.location.city = results[0].formatted_address;
    newUserDetails.location.address = results[0].address_components;

    dispatch({
      type: "MODIFY_USER",
      payload: newUserDetails,
    });

    if (user.id !== null) DbService.updateUser(newUserDetails);
  };

  return (
    <Fragment>
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input {...getInputProps({ placeholder: "Wpisz adres" })} />

              <div>
                {loading ? <div>...wczytywanie</div> : null}

                {suggestions.map((suggestion: Suggestion) => {
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
    </Fragment>
  );
};

export default React.memo(EnterAddressInput);
