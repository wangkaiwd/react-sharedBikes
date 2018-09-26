import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import Main from './main'
import ExampleRoute2 from './route2'
class IRouter extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <Router>
        <ExampleRoute2>
          <Switch>
            <Route path="/app" render={() => (
              <Home>
                <Route path="/app/home" component={Main} />
              </Home>
            )} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </Switch>
        </ExampleRoute2>
      </Router>
    )
  }
}
export default IRouter
