import React from "react";
import { Link } from "react-router";

export default class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to="/second">to second</Link>
    );
  }
}
