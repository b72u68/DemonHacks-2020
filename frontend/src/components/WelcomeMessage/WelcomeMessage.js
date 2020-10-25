import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export default class WelcomeMsg1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className,
      onClick: this.props.onClick,
    };
  }
  render() {
    return (
      <div className={this.state.className} onClick={this.state.onClick}>
        <Spring
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          config={{ duration: 3500 }}
        >
          {(props) => (
            <div style={props}>
              <div className="namaste">
                <h1>Namaste</h1>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}
