import {
  About,
  Dashboard,
  Events,
  Faq,
  Home,
  Locations,
  Login,
  Profile,
  QRCodes,
  Scanner,
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
  { route: "/supplier/dashboard", element: <Dashboard /> },
  { route: "/supplier/events", element: <Events /> },
  { route: "/supplire/login", element: <Login /> },
  { route: "/supplier/scanner", element: <Scanner /> },
];
