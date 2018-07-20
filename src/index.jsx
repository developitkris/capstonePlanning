import React from "react";
import ReactDOM from "react-dom";

var greeting = React.createElement('h1', {}, 'StickUs: create status updates for your location now');

ReactDOM.render(
  greeting,
  document.getElementById('react-app-root')
);
