import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { MovieProvider } from "./movieContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </StrictMode>
);
