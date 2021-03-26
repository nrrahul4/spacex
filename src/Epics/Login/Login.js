import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import "./Login.css";

const loginErrors = {
  credIssue: "username or password incorrect",
  insufficientField: "Please provide username and password",
};

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onLogin = (event) => {
    const { username, password } = this.state;
    if (username && password) {
      this.setState({
        error: "",
      });
      axios
        .get("https://run.mocky.io/v3/46c32258-adac-4a31-8ed6-777bc09b99f2")
        .then((res) => {
          if (res.data) {
            const userInfo =
              res.data.identity &&
              res.data.identity.filter(
                (usrDetail) =>
                  usrDetail.usrname === username &&
                  usrDetail.passwd === password
              );
            if (userInfo.length) {
              delete userInfo[0].passwd
              sessionStorage.setItem('userInfo', JSON.stringify(userInfo[0]));
              sessionStorage.setItem('isAuthenticated', JSON.stringify(true));
              this.props.history.push('/dashboard')
            } else {
              this.setState({
                error: loginErrors.credIssue,
              });
            }
          }
        });
    } else {
      this.setState({
        error: loginErrors.insufficientField,
      });
    }
  };
  render() {
    const { username, password, error } = this.state;
    return (
      <div className="container">
        <div className="login">
          <div className="login__Wrapper">
            <h1>Login</h1>
            <input
              placeholder="Username"
              value={username}
              name="username"
              onChange={this.onChange}
            />
            <input
              placeholder="Password"
              value={password}
              name="password"
              type="password"
              onChange={this.onChange}
            />
            <div className="login__btnWrp">
              <span className="error__login">{error}</span>
              <button className="login__button" onClick={this.onLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
