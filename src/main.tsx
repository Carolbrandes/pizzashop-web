import React from "react";
import ReactDOM from "react-dom/client";

import { enableMSW } from "./api/mocks";
import { App } from "./app";

//* the fn enableMSW will be call, if the mode is not 'test' it just be call the code, but if the mode is 'test' before call the code, the service worker will be init.
enableMSW().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
