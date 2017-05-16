import React from "react";
import { Link } from "react-router";
import s from "./Top.css";

export default class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.root}>
        <Link to="/second">to second</Link>
      </div>
    );
  }
}
