import { createBrowserRouter } from "react-router-dom";
import Timeline from "./pages/timeline";
import About from "./pages/about";
import TheGame from "./pages/theGame";
import Survey from "./pages/survey";
import WhoWeAre from "./pages/whoWeAre";
import HowToNavigate from "./pages/howToNavigate";
import Loading from "./components/Loading";
import Map from "./pages/map";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading />,
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
  {
    path: "/who-we-are",
    element: <WhoWeAre />,
  },
  {
    path: "/how-to-navigate",
    element: <HowToNavigate />,
  },
  {
    path: "/map",
    element: <Map />,
  },
]);
