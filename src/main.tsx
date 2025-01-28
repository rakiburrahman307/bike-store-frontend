import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import { ThemeProvider } from "./components/context/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
