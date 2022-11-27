import { createContext } from "react";

import { putUser } from "../utils/firebase/firebase.utils.js";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ putUser }}>
      {children}
    </FirebaseContext.Provider>
  );
};
