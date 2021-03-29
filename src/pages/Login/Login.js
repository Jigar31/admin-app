import React, { Component } from "react";

import Theme from "../../common/Theme";
import TextField from "@material-ui/core/TextField";
import StyledButton from "../../common/StyledButton";
import { encodeBase64, decodeBase64 } from "../../utils/helpers";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  login = () => {
    console.log("username:", decodeBase64(this.state.username));
    console.log("password:", decodeBase64(this.state.password));
  };

  render() {
    return (
      <Theme>
        <div>
          <TextField
            label="Username"
            variant="outlined"
            onChange={(e) =>
              this.setState({ username: encodeBase64(e.target.value) })
            }
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) =>
              this.setState({ password: encodeBase64(e.target.value) })
            }
          />
          <StyledButton label="Login" onClick={this.login} />
        </div>
      </Theme>
    );
  }
}

export default Login;
