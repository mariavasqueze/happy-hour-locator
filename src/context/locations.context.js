import { createContext, useState, useEffect } from "react";

import {
  // addLocations,
  getLocations,
} from "../utils/firebase/firebase.utils.js";

// import LOCATIONS_DATA from "../utils/data/location-data.js";

export const LocationsContext = createContext({
  locations: [],
});

export const LocationsProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocationsMap = async () => {
      const locationsMap = await getLocations();
      setLocations(locationsMap);
    };

    getLocationsMap();
  }, []);

  return (
    <LocationsContext.Provider value={{ locations }}>
      {children}
    </LocationsContext.Provider>
  );
};
