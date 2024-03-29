import { createContext } from "react";

import {
  getCodes,
  addCode,
  putCode,
  deleteCode,
  putUser,
  putUserPassword,
  putAdditional,
  getLocations,
  putLocation,
  addLocation,
  deleteLocation,
} from "../utils/firebase/firebase.utils.js";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider
      value={{
        getCodes,
        addCode,
        putCode,
        deleteCode,
        putUser,
        putUserPassword,
        putAdditional,
        getLocations,
        putLocation,
        addLocation,
        deleteLocation,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
