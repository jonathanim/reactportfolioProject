import React, { Component } from "react";
import MyNavbar from "./Navbar";
import BodyComponent from "./BodyComponent";
import Footer from "./Footer";
import Services from "./Services";
import Projects from "./Projects";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Contact from "./Contact";
import CardPage from "./CardPage";
import { SKILLSDATA } from "./SkillsData";
import { TransitionGroup, CSSTransition } from 'react-transition-group'



class Main extends Component {
    constructor(props) {
        super();
        this.state = {
            skills: [...SKILLSDATA],

        }
    }

    render() {

        const renderCard = ({ match }) => {
            return (
                <CardPage
                    skill={this.state.skills.filter(skill => skill.id === +match.params.cardId)[0]}
                    state={[...this.state.skills]}
                />
            )
        }

        return (
            <>
                <MyNavbar />
                <TransitionGroup>
                    <CSSTransition classNames="card" timeout={300}>

                        <Switch>
                            <Route path="/services/:cardId" component={renderCard} />
                            <Route exact path="/services" component={() => <Services skills={this.state.skills} />} />
                            <Route exact path="/projects" component={Projects} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/" component={BodyComponent} />x
                            <Redirect to="/" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup >
                <Footer />
            </>
        );
    }
}

export default withRouter(Main);
