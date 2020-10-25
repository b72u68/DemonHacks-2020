import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.js";

export default class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Homepage} exact />
        </Switch>
      </main>
    );
  }
}
