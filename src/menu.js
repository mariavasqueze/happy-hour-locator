import { Home, Signup } from "./components";

export const menu = [
  { route: "/", text: "Home", element: <Home /> },
  { route: "/locations", text: "Locations", element: <div>locations</div> },
  { route: "/about", text: "About Us", element: <div>about</div> },
  { route: "/faq", text: "FAQ", element: <div>faq</div> },
  { route: "/signup", text: "Sign-Up", element: <Signup /> },
];
