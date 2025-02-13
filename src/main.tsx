import { createRoot } from "react-dom/client";
import "./index.css";
import globalStore from "./shared/store/globalStore.ts";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/routers/router.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={globalStore}>
    <div className="flex" id="main-container">
      <RouterProvider router={router} />
    </div>
  </Provider>,
  // </StrictMode>,
);
