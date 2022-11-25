import React from "react";

import { Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { routes } from "./routes";
import { UserProvider, LocationsProvider } from "./context";

function App() {
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
