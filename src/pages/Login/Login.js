import React, { Component } from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import theme from "../../common/Theme";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  login = () => {
    console.log("username:", this.state.username);
    console.log("password:", this.state.password);
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <TextField
            label="Username"
            variant="outlined"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Button variant="contained" onClick={this.login}>
            Login
          </Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default Login;
