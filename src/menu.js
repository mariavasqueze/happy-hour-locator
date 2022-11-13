import { About, Faq, Home, Locations, Signup } from "./components";

export const menu = [
  { route: "/", text: "Home", element: <Home /> },
  { route: "/locations", text: "Locations", element: <Locations /> },
  { route: "/about", text: "About Us", element: <About /> },
  { route: "/faq", text: "FAQ", element: <Faq /> },
  { route: "/signup", text: "Sign-Up", element: <Signup /> },
];
