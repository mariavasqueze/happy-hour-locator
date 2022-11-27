import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  signOutUser,
  // addAdditional,
  getAdditional,
  // deleteAdditional,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  signOutUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserAdditionals, setCurrentUserAdditionals] = useState();
  const value = {
    currentUser,
    currentUserAdditionals,
    setCurrentUser,
    signOutUser,
  };
  console.log({ currentUser });
  console.log({ currentUserAdditionals });

  //unsubscribe refers to stop listening because the firebase onAuthStateChangedListener is always listening for changes
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (currentUser === null) setCurrentUserAdditionals(undefined);

    if (currentUser && currentUserAdditionals === undefined) {
      async function additionals() {
        const additionalData = await getAdditional([
          ["uid", "==", currentUser.uid],
        ]);

        // Uncomment to delete trash additionals of user
        // additionalData.forEach((add) => deleteAdditional(add.id));

        if (additionalData.length) {
          setCurrentUserAdditionals(additionalData[0]);
        } else {
          // await addAdditional(currentUser.uid);
        }
      }

      additionals();
    }
  }, [currentUser, currentUserAdditionals]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
