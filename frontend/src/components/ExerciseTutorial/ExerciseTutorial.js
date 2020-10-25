import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class ExerciseTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: this.props.exercise,
    };
  }

  render() {
    return (
      <div>
        <div>
          <h2>{this.state.exercise.name}</h2>
        </div>
        <div>
          <h3>Benefits</h3>
        </div>
        <ul>
          {this.state.exercise.benefits.map((benefit, i) => (
            <li key={i}>
              <h5>{benefit}</h5>
            </li>
          ))}
        </ul>
        <div>
          <h3>Steps</h3>
        </div>
        <ul>
          {this.state.exercise.steps.map((step, i) => (
            <li key={i}>
              <h5>{step}</h5>
            </li>
          ))}
        </ul>
        <ReactPlayer
          url={this.state.exercise.link}
          controls
          playbackRate={1}
          width="800px"
          height="600px"
        />
      </div>
    );
  }
}
