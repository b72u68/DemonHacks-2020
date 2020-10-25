import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ExerciseTutorial from "../ExerciseTutorial/ExerciseTutorial";
/*
 *import ExerciseCard from "../ExerciseCard/ExerciseCard.js";
 */

export default class DisplayExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: "",
      exercises: [],
      displayExercises: [],
      searchQuery: this.props.searchQuery,
      exTutorial: null,
      openTutorial: false,
    };
    this.handleClickCard = this.handleClickCard.bind(this);
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

  handleClickCard(exercise) {
    this.setState({
      exTutorial: exercise,
      openTutorial: true,
    });
    console.log("Clicked");
  }

  getLevelColor(level) {
    var diffTagColor = "";
    var diffTagTextColor = "white";

    switch (level) {
      case "intermediate":
        diffTagColor = "#FFE761";
        diffTagTextColor = "#252A31";
        break;
      case "advanced":
        diffTagColor = "#F45E6D";
        break;
      default:
        diffTagColor = "#61DEA4";
    }
    return { tag: diffTagColor, text: diffTagTextColor };
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
        {this.state.openTutorial ? (
          <ExerciseTutorial exercise={this.state.exTutorial} />
        ) : (
          <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              {this.state.displayExercises.map((ex) => (
                <Grid item xs={3} key={ex.id}>
                  <Card style={{ maxWidth: "250px" }}>
                    <CardActionArea
                      onClick={() => {
                        this.setState({
                          exTutorial: ex,
                          openTutorial: true,
                        });
                      }}
                    >
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                          {ex.name}
                        </Typography>
                        <Typography>{ex.description}</Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{ backgroundColor: "#EBEFF5" }}>
                      Difficulty:
                      <Button
                        size="small"
                        color="primary"
                        style={{
                          backgroundColor: this.getLevelColor(ex.level).tag,
                          marginLeft: "10px",
                          marginRight: "10px",
                        }}
                      >
                        <h5
                          style={{
                            padding: "0",
                            margin: "0",
                            color: this.getLevelColor(ex.color).text,
                            fontWeight: "bold",
                            fontSize: "10",
                          }}
                        >
                          {ex.level}
                        </h5>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
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
