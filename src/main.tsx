import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Connexion from "./Connexion";
import React from "react";
import ReactDOM from "react-dom/client";
import Acceuil from "./Acceuil";


const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Acceuil />
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/addmusique",
    element: <Acceuil />,
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
