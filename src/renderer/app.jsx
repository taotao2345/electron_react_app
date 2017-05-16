import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Top from "./components/Top/Top";
import Second from "./components/second";

const appRoutes = (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="top" component={Top} />
      <Route path="second" component={Second} />
    </Route>
  </Router>
)

if (!location.hash.length) {
  location.hash = "#/top";
}

render(appRoutes, document.getElementById("app"));
