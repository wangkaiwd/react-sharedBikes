import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class ExampleRoute2 extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/app">index</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
export default ExampleRoute2
