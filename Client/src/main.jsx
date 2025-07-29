import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routers/Router";
import AuthProvider from "./Auth/AuthProvider";
import 'animate.css';
import "aos/dist/aos.css";

import 'react-tooltip/dist/react-tooltip.css'



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
