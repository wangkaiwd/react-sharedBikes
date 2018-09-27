import React from "react";
import App from '../App'
import Login from '@/pages/login'
import AdminRouter from './adminRouter'
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export default () => (
  <Router>
    <App>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={AdminRouter} />
      </Switch>
    </App>
  </Router>
)
