import { createContext, useState, useEffect } from "react";

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

import LOCATIONS_DATA from "../utils/data/location-data.js";

export const LocationsContext = createContext({
  locations: {},
});

export const LocationsProvider = ({ children }) => {
  const [locations, setLocations] = useState({});

  //   only used to add the data on firebase once
  //   useEffect(() => {
  //     addCollectionAndDocuments('locations', LOCATIONS_DATA);
  //   }, []);

  // for calling the data
  useEffect(() => {
    const getLocationsMap = async () => {
      const locationsMap = await getCategoriesAndDocuments();
      setLocations(locationsMap);
      console.log(locationsMap);
    };
    getLocationsMap();
  }, []);

  const value = { locations };
  return (
    <LocationsContext.Provider value={value}>
      {children}
    </LocationsContext.Provider>
  );
};
