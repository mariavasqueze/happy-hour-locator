import {
  About,
  Faq,
  Home,
  Locations,
  Profile,
  QRCodes,
  Signup,
} from "./components";

export const routes = [
  { route: "/about", element: <About /> },
  { route: "/faq", element: <Faq /> },
  { route: "/", element: <Home /> },
  { route: "/locations", element: <Locations /> },
  { route: "/profile", element: <Profile /> },
  { route: "/qrcodes", element: <QRCodes /> },
  { route: "/signup", element: <Signup /> },
];
