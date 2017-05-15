import React from "react";
import { Link } from "react-router";

export default class Second extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to="/top">to top</Link>
    );
  }
}
