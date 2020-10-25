import React, { Component } from "react";
import "./button.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: this.props.children,
      type: this.props.type,
      onClick: this.props.onClick,
      buttonStyle: this.props.buttonStyle,
      buttonSize: this.props.buttonSize,
    };
  }

  render() {
    const STYLES = [
      "btn--primary--solid",
      "btn--warning--solid",
      "btn--danger--solid",
      "btn--success--solid",
      "btn--primary--outline",
      "btn--warning--outline",
      "btn--danger--outline",
      "btn--success--outline",
    ];

    const SIZES = ["btn--medium", "btn-small"];

    const checkButtonStyle = STYLES.includes(this.state.buttonStyle)
      ? this.state.buttonStyle
      : STYLES[0];

    const checkButtonSize = STYLES.includes(this.state.buttonSize)
      ? this.state.buttonSize
      : SIZES[0];

    var buttonClassName = `${checkButtonStyle} ${checkButtonSize}`;

    return (
      <button
        className={buttonClassName}
        onClick={this.state.onClick}
        type={this.state.type}
      >
        {this.state.children}
      </button>
    );
  }
}
