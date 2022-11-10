import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { menu } from "./menu";
import mainContext from "./context";

const { Provider } = mainContext;

//Replace with loggin and initial data
let mainData = {
  isLogged: true,
  username: "Edward",
  imageUrl:
    "https://avatars.githubusercontent.com/u/58954908?s=400&u=630e8c52ba87128cc657821b622c0d56ee89aea7&v=4",
};

function App() {
  const [mainState, setMainState] = useState({});

  const login = () => {
    setMainState(mainData);
  };

  const logout = () => {
    setMainState({});
  };

  return (
    <Provider value={{ ...mainState, logout, login }}>
      <Layout menu={menu}>
        <Routes>
          {menu.map((link) => (
            <Route key={link.text} path={link.route} element={link.element} />
          ))}
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
