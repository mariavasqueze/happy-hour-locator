import React from "react";

import { Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { routes } from "./routes";
import { UserProvider } from "./context";
import { LocationsProvider } from "./context/locations.context";

/*
const { Provider } = mainContext;
Replace with loggin and initial data
let mainData = {
  isLogged: true,
  username: "Edward",
  imageUrl:
    "https://avatars.githubusercontent.com/u/58954908?s=400&u=630e8c52ba87128cc657821b622c0d56ee89aea7&v=4",
};
*/

function App() {
  // const [mainState, setMainState] = useState({});

  // const login = () => {
  //   setMainState(mainData);
  // };

  // const logout = () => {
  //   setMainState({});
  // };

  return (
    <UserProvider>
      <LocationsProvider>
        <Layout>
          <Routes>
            {routes.map((link) => (
              <Route
                key={link.route}
                path={link.route}
                element={link.element}
              />
            ))}
          </Routes>
        </Layout>
      </LocationsProvider>
    </UserProvider>
  );
}

export default App;
