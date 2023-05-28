import React from 'react';

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./Navbar";
import Box from './Box';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar />
    <App />
    <Box />
  </>
);

reportWebVitals();
