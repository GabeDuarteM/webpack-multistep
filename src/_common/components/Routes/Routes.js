import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loadable from "react-loadable";

const LoadableHome = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Home" */ "../../../components/Home/Home"),
  loading({ pastDelay }) {
    return pastDelay ? <div>Loading...</div> : null;
  },
  delay: 500
});

const LoadableCounter = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Counter" */ "../../../Counter/containers/CounterContainer/CounterContainer"),
  loading({ pastDelay }) {
    return pastDelay ? <div>Loading...</div> : null;
  },
  delay: 500
});

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/counter" component={LoadableCounter} />
      <Route path="/" component={LoadableHome} />
    </Switch>
  </Router>
);

export default Routes;
