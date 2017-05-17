import React from "react";
import fetch from "isomorphic-fetch";
import { Link } from "react-router";
import s from "./Top.css";

export default class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: null,
    };

    this.fetchData();
  }

  fetchData() {
    fetch("https://httpbin.org/ip", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .then(json => {
      this.setState({
        test: json.origin
      });
    });
  }

  render() {
    return (
      <div className={s.root}>
        <Link to="/second">to second {this.state.test}</Link>
      </div>
    );
  }
}
