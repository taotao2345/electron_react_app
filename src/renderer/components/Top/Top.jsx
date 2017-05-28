import React from "react";
//import fetch from "isomorphic-fetch";
import fetch from "../../util/fetch";
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
    (async () => {
      const response = await fetch("https://httpbin.org/ip");
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      const data = await response.json();

      this.setState({
        test: data.origin
      });
    })();
  }

  render() {
    return (
      <div className={s.root}>
        <Link to="/second">to second {this.state.test}</Link>
      </div>
    );
  }
}
