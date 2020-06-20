import React from "react";
import { render } from "react-dom";
import "../__shared/init";
import { App } from "./App";
import { EventBus } from "./EventBus";

const root = document.getElementById("root");

render(
  <EventBus>
    <App />
  </EventBus>,
  root
);
