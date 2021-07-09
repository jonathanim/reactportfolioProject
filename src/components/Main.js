import React, { Component } from "react";
import MyNavbar from "./Navbar";
import BodyComponent from "./BodyComponent";
import Footer from "./Footer";
import Services from "./Services";
import Projects from "./Projects";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Contact from "./Contact";
import CardPage from "./CardPage";




class Main extends Component {

    render() {


        return (
            <>
                <MyNavbar />
                <Switch>
                    <Route path="/services/:cardId" component={CardPage} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/" component={BodyComponent} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default withRouter(Main);
