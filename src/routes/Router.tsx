import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Politicas from "../pages/Politicas";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contato", element: <Contato /> },
      { path: "politicas", element: <Politicas /> },
    ],
  },
]);
