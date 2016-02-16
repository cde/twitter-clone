import React from "react";
import ReactDOM from "react-dom";
// using an ES6 transpiler, like babel
import { Router, Route, Link, browserHistory } from 'react-router'

import Index from "./components/Index";
import Follow from "./components/Follow";

class App extends React.Component {
  render() {
    return (
      <div> { this.props.children } </div>
    )
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render (
      <Router history={browserHistory} >
        <Route component={App}>
          <Route path="/" component={Index}></Route>
          <Route path="/follow" component={Follow}></Route>
        </Route>
      </Router>,
      reactNode
    );
  }
};

$(documentReady);
