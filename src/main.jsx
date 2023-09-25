import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/index.jsx";
import { BrowserRouter } from "react-router-dom";
import SiteRouters from "./SiteRouters.jsx";
import Navbar from "./Layout/Navbar.jsx";
import "./style.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <SiteRouters />
    </Provider>
  </BrowserRouter>
);
