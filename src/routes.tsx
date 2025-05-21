import { createBrowserRouter, Navigate } from "react-router-dom"
import Timeline from "./pages/timeline"
import About from "./pages/about";
import TheGame from "./pages/theGame";
import Survey from "./pages/survey";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/timeline" />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/the-game",
    element: <TheGame />,
  },
  {
    path: "/survey",
    element: <Survey />,
  },
  // {
  //   path: "/who-we-are",
  //   element: <WhoWeAre />,
  // },
  // {
  //   path: "/how-to-navigate",
  //   element: <HowToNavigate />,
  // },
]);