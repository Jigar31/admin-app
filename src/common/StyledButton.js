import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class StyledButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        color={this.props.color || "primary"}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </Button>
    );
  }
}

export default StyledButton;
