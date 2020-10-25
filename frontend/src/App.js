import React, { Component } from "react";
/*
 *import { Route, Switch } from "react-router-dom";
 */
import Homepage from "./components/Homepage/Homepage.js";
/*
 *import DisplayExercises from "./components/DisplayExercises/DisplayExercises";
 */

export default class App extends Component {
  render() {
    return (
      <main>
        <Homepage />
      </main>
    );
  }
}
