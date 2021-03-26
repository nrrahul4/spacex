import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Dashboard.css";
import Categories from "../../Components/Categories/Categories";

class Dashboard extends Component {
  state = {
    user: "",
  };
  componentDidMount() {
    if (window && sessionStorage.getItem("isAuthenticated")) {
      const userDetail = sessionStorage.getItem("userInfo");
      this.setState({
        user: JSON.parse(userDetail),
      });
    } else {
      this.props.history.push("/");
    }
  }

  onLogout = () => {
    sessionStorage.clear();
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="dashboard__wrap">
        <div className="dashboard__header">
          <h1 style={{ textTransform: "uppercase", fontSize: "23px" }}>
            Welcome {this.state.user && this.state.user.usrname}
          </h1>
          <div
            style={{ marginRight: "20px", cursor: "pointer" }}
            onClick={this.onLogout}
          >
            logout
          </div>
        </div>
        <h4 style={{ textAlign: "center", marginBottom: "40px" }}>
          Please find the spacex categories below
        </h4>
        <Categories/>
      </div>
    );
  }
}

export default withRouter(Dashboard);
