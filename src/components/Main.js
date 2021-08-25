import React, { Component } from "react";
import MyNavbar from "./Navbar";
import BodyComponent from "./BodyComponent";
import Service from "./Service";
import Projects from "./Projects";
import About from "./About";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Contact from "./Contact";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollTop from "./ScrollTop";

class Main extends Component {
  render() {
    return (
      <>
        <MyNavbar />
        <TransitionGroup>
          <CSSTransition classNames="card" timeout={300}>
            <ScrollTop>
              <Switch>
                {/* <Route path="/services/:cardId" component={renderCard} /> */}
                <Route exact path="/service" component={Service} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/About" component={About} />
                <Route exact path="/" component={BodyComponent} />
                <Redirect to="/" />
              </Switch>
            </ScrollTop>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}

export default withRouter(Main);
