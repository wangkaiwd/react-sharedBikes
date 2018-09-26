import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        Home
        <Link to="/app/home">Home</Link>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
export default Home
