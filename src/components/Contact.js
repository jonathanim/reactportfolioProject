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


function Contact() {

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
                            <Form className="form">
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input
                                        type="text"
                                        name="fname"
                                        id="fname"
                                        placeholder="First Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input
                                        type="text"
                                        name="lname"
                                        id="lname"
                                        placeholder="Last Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="comment">comment</Label>
                                    <Input
                                        type="textarea"
                                        name="Comment"
                                        id="comment"
                                        placeholder="Leave a Comment"
                                    />
                                </FormGroup>
                                <Button className="btn btn-dark">Submit</Button>
                            </Form>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div >
    )

}

export default Contact
