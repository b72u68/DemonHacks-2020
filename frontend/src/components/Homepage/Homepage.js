import React, { Component } from "react";
import Button from "react-bootstrap/Button";
/*
 *import SearchBox from "../SearchBox/SearchBox";
 */
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import DisplayExercises from "../DisplayExercises/DisplayExercises";
import "../Button/Button.css";
import "./Homepage.css";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      visible: true,
      input: "",
      searchQuery: "",
    };
  }

  handleClickMessage() {
    this.setState({
      visible: false,
    });
  }

  handleChangeInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleChooseLevel(event) {
    event.preventDefault();
    this.setState({
      page: 1,
      searchQuery: event.target.value,
    });
  }

  handleSubmitSearch(event) {
    event.preventDefault();
    this.setState({
      page: 1,
      searchQuery: this.state.input,
    });
  }

  render() {
    const exerciseLevels = ["Beginner", "Intermediate", "Advanced", "All"];
    const searchResult = (
      <DisplayExercises searchQuery={this.state.searchQuery} />
    );
    const homepage = (
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
                  <form onSubmit={this.handleSubmitSearch.bind(this)}>
                    <input
                      type="text"
                      className="search"
                      placeholder="Downward-Facing Dog..."
                      onChange={this.handleChangeInput.bind(this)}
                      style={{ height: "30px", width: "200px" }}
                    />
                    &nbsp;&nbsp;
                    <Button
                      type="submit"
                      className="btn--primary--solid"
                      style={{ height: "30px", width: "75px" }}
                      onSubmit={this.handleSubmitSearch.bind(this)}
                    >
                      Search
                    </Button>
                  </form>
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
                          value={level}
                          type="button"
                          className="btn--primary--solid"
                          style={{ height: "75px", width: "150px" }}
                          onClick={this.handleChooseLevel.bind(this)}
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
    switch (this.state.page) {
      case 1:
        return searchResult;
      default:
        return homepage;
    }
  }
}
