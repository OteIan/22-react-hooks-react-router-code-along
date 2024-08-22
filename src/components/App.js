// src/components/App.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Signup from "./Signup";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact
            component={route.component}
          />
        ))}
      </Switch>
    </div>
  );
}

export default App;
