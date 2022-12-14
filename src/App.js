import React from "react";
import { browserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route  exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/stocks/:symbol"
          render={(routerProps) => <Stocks {...routerProps}/> } />

        <Route path="/stocks">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
