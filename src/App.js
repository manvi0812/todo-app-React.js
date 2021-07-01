import React from "react";
import TodoApp from "./components/todoApp";
// import Main from "./Grocery-bud/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={TodoApp} />
    </Router>
  );
}

export default App;
