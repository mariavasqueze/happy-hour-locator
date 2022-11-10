import React from "react";

import { Route, Routes } from "react-router-dom";

import { Layout } from "./components";

const menu = [
  { route: "/", text: "Home", element: <div>home</div> },
  { route: "/locations", text: "Locations", element: <div>locations</div> },
  { route: "/about", text: "About Us", element: <div>about</div> },
  { route: "/faq", text: "FAQ", element: <div>faq</div> },
];

function App() {
  return (
    <Layout menu={menu}>
      <Routes>
        {menu.map((link) => (
          <Route key={link.text} path={link.route} element={link.element} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
