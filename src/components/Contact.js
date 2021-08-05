import React from 'react';
import {
    Container, Col, Row,
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import './Contact.css';
import { Fade } from 'react-animation-components'


class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            message: ""
        }
    }

    handleOnChange = e => {
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value
        })
    }

    onSubmit = (e) => {
       
    };

    render() {
        return (
            <div>
                <Container >
                    <Row>
                        <Col>
                            <div className="home-header">
                                <h2 className="">
                                    Contact Me
                                </h2>

                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center">
                        <Col sm="6" >
                            <Fade in>
                                <Form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            onChange={e => this.handleOnChange(e)}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="firstName">First Name</Label>
                                        <Input
                                            type="text"
                                            name="firstName"
                                            id="fname"
                                            placeholder="First Name"
                                            onChange={e => this.handleOnChange(e)}
                                            value={this.state.firstName}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="lastName">Last Name</Label>
                                        <Input
                                            type="text"
                                            name="lastName"
                                            id="lname"
                                            placeholder="Last Name"
                                            onChange={e => this.handleOnChange(e)}
                                            value={this.state.lastName}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="message">Message</Label>
                                        <Input
                                            type="textarea"
                                            name="message"
                                            id="message"
                                            placeholder="Leave a Message"
                                            onChange={e => this.handleOnChange(e)}
                                            value={this.state.message}
                                        />
                                    </FormGroup>
                                    <Button className="btn btn-dark" type="submit">Submit</Button>
                                </Form>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </div >
        )

    }
}

export default Contact
