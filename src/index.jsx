import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

var greeting = React.createElement('h1', {}, 'StickUs: create status updates for your location now');

ReactDOM.render(
  greeting,
  <App />
  document.getElementById('react-app-root')
);
