import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import "./index.css";
import "./styles/extra.scss";
import { Router } from "./routing";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>
);
