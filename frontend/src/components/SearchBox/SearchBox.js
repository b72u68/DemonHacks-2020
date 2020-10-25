import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../Button/Button.css";
import "./SearchBox.css";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      placeholder: this.props.placeholder,
      onChange: this.props.handleChange,
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.input);
  }

  handleChangeInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          className="search"
          placeholder={this.state.placeholder}
          onChange={this.handleChangeInput.bind(this)}
          style={{ height: "30px", width: "200px" }}
        />
        &nbsp;&nbsp;
        <Button
          type="submit"
          className="btn--primary--solid"
          style={{ height: "30px", width: "75px" }}
        >
          Search
        </Button>
      </form>
    );
  }
}
