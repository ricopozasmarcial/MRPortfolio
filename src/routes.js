import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import Blog from "./Pages/Blog";
import AboutMe from "./Pages/AboutMe";
import Aptitudes from "./Pages/Aptitudes";
import Projects from "./Pages/Projects";
const Routes = () => (
  <HashRouter>
    <div>
        <Switch>
          <Route exact path="/Welcome" component={Blog} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Aptitudes" component={Aptitudes} />
          <Route exact path="/*" component={Blog} />
          <Redirect to="/"></Redirect>
        </Switch>
    </div>
  </HashRouter>
);

export default Routes;