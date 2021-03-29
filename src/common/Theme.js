import React, { Component } from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { COLORS } from "../constants";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.teal,
    },
    secondary: {
      main: COLORS.blue,
    },
  },
});

class Theme extends Component {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}

export default Theme;
