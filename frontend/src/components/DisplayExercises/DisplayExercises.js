import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ExerciseCard from "../ExerciseCard/ExerciseCard.js";

export default class DisplayExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: "",
      exercises: [],
      displayExercises: [],
      searchQuery: this.props.searchQuery,
    };
  }

  filterList(exercises) {
    console.log(this.state.searchQuery);
    const levels = ["beginner", "intermediate", "advanced", "all"];
    var displayList = [];
    if (levels.indexOf(this.state.searchQuery.toLowerCase()) < 0) {
      for (var i = 0; i < exercises.length; i++) {
        if (
          exercises[i].name
            .toLowerCase()
            .includes(this.state.searchQuery.toLowerCase())
        ) {
          displayList = [...displayList, exercises[i]];
        }
      }
      return displayList;
    } else {
      if (this.state.searchQuery.toLowerCase() === "all") {
        return exercises;
      } else {
        for (var j = 0; j < exercises.length; j++) {
          if (exercises[j].level === this.state.searchQuery.toLowerCase()) {
            displayList = [...displayList, exercises[j]];
          }
        }
        return displayList;
      }
    }
  }

  async componentDidMount() {
    await fetch("/api/exercises")
      .then((res) => res.json())
      .then((exercises) => {
        console.log("Exercises fetched...", exercises);
        this.setState({
          isLoaded: true,
          exercises: exercises,
          displayExercises: this.filterList(exercises),
        });
      })
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    return this.state.isLoaded ? (
      <div>
        <div className="titles">
          <a href="/" style={{ textDecoration: "none" }}>
            <h1 className="App-title" style={{ margin: "0" }}>
              coFIT
            </h1>
          </a>
        </div>
        <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {this.state.displayExercises.map((ex) => (
              <Grid item xs={3} key={ex.id}>
                <ExerciseCard
                  name={ex.name}
                  description={ex.description}
                  level={ex.level}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    ) : (
      <div style={{ textAlign: "center", padding: "70px", fontSize: "25px" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 className="App-title" style={{ margin: "0" }}>
            coFIT
          </h1>
        </a>
        <p>Loading Exercises...</p>
      </div>
    );
  }
}
