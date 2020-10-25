import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import SearchBox from "../SearchBox/SearchBox";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import "../Button/Button.css";
import "./Homepage.css";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  handleClickMessage() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const exerciseLevels = ["Beginner", "Intermediate", "Advanced", "All"];
    return (
      <div className="Homepage">
        <div
          className={this.state.visible ? "test-visible" : "test-hidden"}
          onClick={this.handleClickMessage.bind(this)}
        >
          <WelcomeMessage />
          <p>Click to begin</p>
        </div>

        <header className="App-header">
          <div className="titles">
            <h1 className="App-title">coFIT</h1>
            <p className="sub-title">Staying fit during COVID-19</p>
          </div>
        </header>
        <div className="outer">
          <div className="middle">
            <div className="inner">
              <p className="Options">
                <div className="Select-diff">
                  <h2>Search for an exercise:</h2>
                  <br></br>
                  <SearchBox
                    className="search--primary"
                    value={this.state.searchField}
                    placeholder={"Downward-Facing Dog..."}
                  />
                </div>

                <br></br>

                <h2>OR</h2>
                <div className="Select-diff">
                  <h2>Select a difficulty:</h2>
                  <br></br>
                  <ul style={{ padding: "10px" }}>
                    {exerciseLevels.map((level, i) => (
                      <il style={{ display: "inline", padding: "5px" }}>
                        <Button
                          key={i}
                          type="button"
                          className="btn--primary--solid"
                          style={{ height: "75px", width: "150px" }}
                        >
                          {level}
                        </Button>
                      </il>
                    ))}
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
